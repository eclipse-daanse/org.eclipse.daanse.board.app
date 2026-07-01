<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import type { TinyEmitter } from "tiny-emitter";
import { computed, inject, ref, watch, type Ref } from "vue";
import { useElementSize } from "@vueuse/core";
import MemberDropdown from "./MemberDropdown.vue";

const MDDISPINFO_CHILD_COUNT = 65535;

const props = defineProps({
    rows: {
        required: true,
        type: Array as () => any[],
    },
    rowsStyles: {
        required: true,
        type: Array as () => any[],
    },
    totalContentSize: {
        required: true,
        type: Object as () => any,
    },
    rowsExpandedMembers: {
        required: false,
        type: Array as () => any[],
        default: () => [],
    },
    headerBackgroundColor: {
        required: false,
        type: String,
        default: '#f5f5f5',
    },
    headerTextColor: {
        required: false,
        type: String,
        default: '#000000',
    },
    borderColor: {
        required: false,
        type: String,
        default: 'silver',
    },
    defaultColumnWidth: {
        required: false,
        type: Number,
        default: 150,
    },
    defaultRowHeight: {
        required: false,
        type: Number,
        default: 30,
    },
    fontSize: {
        required: false,
        type: Number,
        default: 14,
    },
    headerFontWeight: {
        required: false,
        type: Number,
        default: 600,
    },
    levelStyles: {
        required: false,
        type: Array as () => Array<{ level: number; backgroundColor: string; textColor: string; fontWeight: number }>,
        default: () => [],
    },
});

const DEFAULT_ROW_HEIGHT = computed(() => props.defaultRowHeight);

const getLevelStyle = (level: number) => {
    if (!props.levelStyles || props.levelStyles.length === 0) {
        return null;
    }
    return props.levelStyles.find(s => s.level === level) || null;
};
const DEFAULT_ROW_HEIGHT_CSS = computed(() => `${props.defaultRowHeight}px`);
const borderColorCSS = computed(() => props.borderColor);
const headerBackgroundColorCSS = computed(() => props.headerBackgroundColor);
const headerTextColorCSS = computed(() => props.headerTextColor);
const fontSizeCSS = computed(() => `${props.fontSize}px`);
const headerFontWeightCSS = computed(() => props.headerFontWeight);
const eventBus = inject("pivotTableEventBus") as TinyEmitter;
const setParentStylesValue = inject("setRowsStyles") as (
    index: number,
    styles: number,
) => {};

const scrollPosition = ref(0);
const translate = ref(0);

const getRowMemberCaption = (i: any, j: any) => {
    const currentMember = props.rows?.[i]?.[j];
    const nextMember = props.rows?.[i - 1]?.[j];

    if (!currentMember) return "";
    if (!nextMember) return currentMember.Caption;

    if (currentMember.UName === nextMember.UName) {
        return "";
    }
    return currentMember.Caption;
};

const getRowsHeaderContainerStyle = () => {
    return {
        transform: `translate(0, -${scrollPosition.value}px)`,
    };
};

let minLevels = [] as number[];
let maxLevels = [] as number[];

watch(
    () => props.rows,
    () => {
        console.log(props.rows);
        maxLevels = [];
        for (let j = 0; j < props.rows.length; j++) {
            const rowMembers = props.rows[j];
            if (!rowMembers || rowMembers.isProperty || !Array.isArray(rowMembers)) continue;
            for (let i = 0; i < rowMembers.length; i++) {
                const member = rowMembers[i];
                if (!member || member.LNum === undefined) continue;
                const level = parseInt(member.LNum);
                if (maxLevels[i] === void 0 || maxLevels[i] <= level) {
                    maxLevels[i] = level;
                }
            }
        }
    },
    { immediate: true, deep: true }
);

watch(
    () => props.rows,
    () => {
        minLevels = [];
        for (let j = 0; j < props.rows.length; j++) {
            const rowMembers = props.rows[j];
            if (!rowMembers || rowMembers.isProperty || !Array.isArray(rowMembers)) continue;
            for (let i = 0; i < rowMembers.length; i++) {
                const member = rowMembers[i];
                if (!member || member.LNum === undefined) continue;
                const level = parseInt(member.LNum);
                if (minLevels[i] === void 0 || minLevels[i] >= level) {
                    minLevels[i] = level;
                }
            }
        }
    },
    { immediate: true, deep: true }
);

const getRowMemberStyle = (i: any, j: any) => {
    const currentMember = props.rows?.[i]?.[j];
    const nextMember = props.rows?.[i - 1]?.[j];

    const styles = {} as { [key: string]: string };

    const levelCount = minLevels[j] === 0 ? maxLevels[j] + 1 : maxLevels[j];

    styles["width"] = `${50 * (levelCount - 1) + 150}px`;

    // Apply level-specific styles
    if (currentMember?.LNum !== undefined) {
        const level = parseInt(currentMember.LNum);
        const levelStyle = getLevelStyle(level);
        if (levelStyle) {
            styles["background-color"] = levelStyle.backgroundColor;
            styles["color"] = levelStyle.textColor;
            styles["font-weight"] = String(levelStyle.fontWeight);
        }
    }

    if (!currentMember || !nextMember) return styles;

    if (currentMember.UName === nextMember.UName) {
        styles["border-top"] = "none";
    }
    return styles;
};

const getRowHeaderStyle = (i: number) => {
    return {
        height: `${props.rowsStyles[i] || DEFAULT_ROW_HEIGHT.value}px`,

        transform: `translate(0, ${translate.value}px)`,
    };
};

const getRowMemberOffsetItems = (i: any, j: any) => {
    const currentMember = props.rows?.[i]?.[j];
    if (!currentMember) return [];

    let result = [];
    for (let ind = minLevels[j]; ind < currentMember.LNum; ind++) {
        result.push({});
    }
    return result;
};

const getRowChildCount = (i: any, j: any) => {
    const currentMember = props.rows?.[i]?.[j];
    if (!currentMember) return 0;
    return currentMember.DisplayInfo & MDDISPINFO_CHILD_COUNT;
};

const hasChildrenDisplayed = (i: any, j: any) => {
    const currentMember = props.rows?.[i]?.[j];
    if (!currentMember) return false;
    if (i + 1 === props.rows.length) return false;
    const currentHierarchyMembers = props.rows.map((e) => e[j]);

    if (
        currentHierarchyMembers.some(
            (e) => e && e.PARENT_UNIQUE_NAME === currentMember.UName,
        )
    ) {
        return true;
    }
    return false;
};

const rowIsExpanded = (i: any, j: any) => {
    const currentMember = props.rows?.[i]?.[j];
    if (!currentMember) return false;

    if (props.rowsExpandedMembers) {
        return props.rowsExpandedMembers.some(
            (e) => e.UName === currentMember.UName,
        );
    }
};

const sameAsPrevious = (i: any, j: any) => {
    const currentMember = props.rows?.[i]?.[j];
    const prevMember = props.rows?.[i - 1]?.[j];

    if (!currentMember || !prevMember) return false;
    return currentMember.UName === prevMember.UName;
};

let resizeInProg = false;
let itemResized: any = -1;

const onStartResize = (e: MouseEvent, i: any) => {
    if (e.button === 0) {
        itemResized = Number(i);
        resizeInProg = true;
    }
};
const onStopResize = () => {
    resizeInProg = false;
};
const onResize = (e: MouseEvent) => {
    if (resizeInProg) {
        const rowStyles =
            (props.rowsStyles[itemResized] || DEFAULT_ROW_HEIGHT.value) + e.movementY;
        setParentStylesValue(itemResized, rowStyles);
    }
};

const drilldownFn = inject("drilldown") as Function;
const drilldown = (member: any) => {
    drilldownFn(member, "rows");
};

const drillupFn = inject("drillup") as Function;
const drillup = (member: any) => {
    drillupFn(member, "rows");
};

const expandFn = inject("expand") as Function;
const expand = (member: any) => {
    expandFn(member, "rows");
};

const collapseFn = inject("collapse") as Function;
const collapse = (member: any) => {
    collapseFn(member, "rows");
};

const rowClick = (member: any) => {
    eventBus.emit("row_clicked", member.UName);
};

const rowRightClick = (e: MouseEvent, member: any) => {
    eventBus.emit("row_right_clicked", member.UName);
};

eventBus.on("onResize", onResize);
eventBus.on("onStopResize", onStopResize);

eventBus.on("scroll", ({ top }: { top: number }) => {
    scrollPosition.value = top;
});

const memberPropertiesModal = ref(null) as Ref<any>;
const openMemberProperties = async (member: any) => {
    // const metadataStorage = useMetadataStorage();
    // const levels = (await metadataStorage.getMetadataStorage()).levels;

    // const level = levels.find((e) => e.LEVEL_UNIQUE_NAME === member.LName);
    // await memberPropertiesModal.value?.run({ level, member });
};

const rowsViewport = ref(null) as unknown as Ref<HTMLElement>;
const rowsContainer = ref(null) as unknown as Ref<HTMLElement>;
const { height: rowsContainerHeight } = useElementSize(rowsViewport);
const debouncedRowsContainerHeight = ref(0);
let debounceTimeout: NodeJS.Timeout | null = null;
watch(rowsContainerHeight, (newHeight) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        debouncedRowsContainerHeight.value = newHeight;
    }, 100);
}, { immediate: true });

const currentlyDisplayedValues = computed(() => {
    if (!rowsViewport.value)
        return {
            data: [],
            translate: translate.value,
        };

    let translateValue = translate.value;
    let result = props.rows.map((rowMembers: any, i: number) => {
        if (rowMembers.isProperty) {
            return {
                ...rowMembers,
                i,
            };
        }

        return rowMembers.map((member: any) => {
            return {
                ...member,
                i,
            };
        });
    });

    const topIndex = props.totalContentSize.yAxis.items.findIndex((e: any) => {
        if (
            e.start <= scrollPosition.value &&
            e.start + e.width > scrollPosition.value
        )
            return true;
        return false;
    });
    let bottomIndex = props.totalContentSize.yAxis.items.findIndex((e: any) => {
        const bottomCoord =
            scrollPosition.value + debouncedRowsContainerHeight.value;
        if (e.start <= bottomCoord && e.start + e.width >= bottomCoord)
            return true;
        return false;
    });

    if (topIndex >= 0 && bottomIndex < 0)
        bottomIndex = props.totalContentSize.yAxis.items.length - 1;

    if (topIndex >= 0 && bottomIndex > topIndex) {
        result = result.slice(topIndex, bottomIndex + 1);
        translateValue = props.totalContentSize.yAxis.items[topIndex].start;
    }
    console.log("ROW PARSED", result)

    return {
        data: result,
        translate: translateValue,
    };
});

const showMemberProperties = (member: any) => {
    // state.membersWithProps.push(member.HIERARCHY_UNIQUE_NAME);
};

const hideMemberProperties = (member: any) => {
    // const indexToRemove = state.membersWithProps.indexOf(
    //     (e) => e === member.HIERARCHY_UNIQUE_NAME,
    // );
    // state.membersWithProps.splice(indexToRemove, 1);
};

const isMemberPropsVisible = (member: any) => {
    // return state.membersWithProps.includes(member.HIERARCHY_UNIQUE_NAME);
};

watch(
    () => currentlyDisplayedValues.value,
    () => {
        translate.value = currentlyDisplayedValues.value.translate;
    },
);
</script>
<template>
    <div class="rowsHeader_viewport" ref="rowsViewport">
        <div class="rowsHeader_container" :style="getRowsHeaderContainerStyle()" ref="rowsContainer">
            <Teleport to="body">
            <!-- <MemberPropertiesModal ref="memberPropertiesModal" /> -->
        </Teleport>
        <div class="rowsHeader" v-for="row in currentlyDisplayedValues.data" :key="row.isProperty ? row.i : row[0].i"
            :style="getRowHeaderStyle(row.isProperty ? row.i : row[0].i)">
            <template v-if="row.isProperty">
                <div class="rowMember rowMemberContent propertyRow">
                    {{ row.PROPERTY_NAME }}
                </div>
            </template>
            <MemberDropdown v-else v-for="(member, j) in row" :key="member?.UName || member?.UNAME || j"
                :propertiesShown="isMemberPropsVisible(member)" @drilldown="drilldown(member)"
                @drillup="drillup(member)" @openMemberProperties="openMemberProperties(member)"
                @showMemberProperties="showMemberProperties(member)"
                @hideMemberProperties="hideMemberProperties(member)">
                <template v-slot="{ }">
                    <div class="flex" @click="rowClick(member)" @contextmenu="rowRightClick($event, member)">
                        <div class="rowMember" :style="getRowMemberStyle(member.i, j)">
                            <div class="rowMemberContentWrapper">
                                <div class="rowMemberOffsetContainer">
                                    <div v-for="item in getRowMemberOffsetItems(member.i, j)" class="rowMemberOffset"></div>
                                </div>
                                <div class="rowMemberContent">
                                    <template v-if="!sameAsPrevious(member.i, j)">
                                        <div v-if="
                                            getRowChildCount(member.i, j) &&
                                            !hasChildrenDisplayed(
                                                member.i,
                                                j,
                                            )
                                        " class="expandIcon">
                                            <va-icon name="chevron_right" size="small" @click="expand(member)" />
                                        </div>
                                        <div v-else-if="
                                            getRowChildCount(member.i, j) &&
                                            rowIsExpanded(member.i, j)
                                        " class="expandIcon">
                                            <va-icon name="expand_more" size="small" @click="collapse(member)" />
                                        </div>
                                    </template>
                                    <div class="rowMemberCaption">
                                        {{ getRowMemberCaption(member.i, j) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row_dragAreaBottom" @mousedown="onStartResize($event, member.i)"></div>
                        <div v-if="member.i > 0" class="row_dragAreaTop" @mousedown="onStartResize($event, member.i - 1)">
                        </div>
                    </div>
                </template>
            </MemberDropdown>
        </div>
    </div>
    </div>
</template>
<style scoped>
.rowsHeader_viewport {
    height: 100%;
    overflow: hidden;
}
.rowsHeader:last-child {
    border-bottom: 1px v-bind(borderColorCSS) solid;
}

.rowsHeader_container {
    height: 100%;
    font-size: v-bind(fontSizeCSS);
    color: v-bind(headerTextColorCSS);
}

.rowsHeader {
    display: flex;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-right: 0;
    border-left: 0;
    height: v-bind(DEFAULT_ROW_HEIGHT_CSS);
    line-height: v-bind(DEFAULT_ROW_HEIGHT_CSS);
    padding-right: 10px;
    border-top: 1px v-bind(borderColorCSS) solid;
    background-color: v-bind(headerBackgroundColorCSS);
}

.rowMemberOffsetContainer .rowMemberOffset {
    width: 30px;
    height: 100%;
    border-right: 1px dashed lightgrey;
}

.rowMemberContentWrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.rowMemberOffsetContainer {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.row_dragAreaTop {
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    top: 0;
    cursor: ns-resize;
    z-index: 1;
}

.row_dragAreaBottom {
    position: absolute;
    height: 5px;
    width: 100%;
    bottom: -1px;
    left: 0;
    cursor: ns-resize;
    z-index: 1;
}

.rowMember {
    display: flex;
    border-left: 1px v-bind(borderColorCSS) solid;
    align-items: flex-start;
}

.rowMemberCaption {
    font-weight: v-bind(headerFontWeightCSS);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 100%;
}

.rowMemberContent {
    width: 150px;
    padding-left: 5px;
    display: flex;
}

.expandIcon {
    flex-grow: 0;
}

.propertyRow {
    width: 100%;
    min-width: 150px;
    font-style: italic;
    font-weight: 500;
}
</style>
