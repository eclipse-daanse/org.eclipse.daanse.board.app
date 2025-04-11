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
import MemberDropdown from "./MemberDropdown.vue";

const DEFAULT_ROW_HEIGHT = 30;
const DEFAULT_ROW_HEIGHT_CSS = `${DEFAULT_ROW_HEIGHT}px`;
const MDDISPINFO_CHILD_COUNT = 65535;

const props = defineProps([
    "rows",
    "rowsStyles",
    "totalContentSize",
    "rowsExpandedMembers",
]);
const eventBus = inject("pivotTableEventBus") as TinyEmitter;
const setParentStylesValue = inject("setRowsStyles") as (
    index: number,
    styles: number,
) => {};

const scrollPosition = ref(0);
const translate = ref(0);

const getRowMemberCaption = (i: number, j: number) => {
    const currentMember = props.rows?.[i]?.[j];
    const nextMember = props.rows?.[i - 1]?.[j];

    if (!currentMember || !nextMember) return currentMember.Caption;

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
        maxLevels = [];
        for (let j = 0; j < props.rows.length; j++) {
            for (let i = 0; i < props.rows[0]?.length; i++) {
                const level = parseInt(props.rows[j][i].LNum);
                if (maxLevels[i] === void 0 || maxLevels[i] <= level) {
                    maxLevels[i] = level;
                }
            }
        }
    },
);

watch(
    () => props.rows,
    () => {
        minLevels = [];
        for (let j = 0; j < props.rows.length; j++) {
            for (let i = 0; i < props.rows[0]?.length; i++) {
                const level = parseInt(props.rows[j][i].LNum);
                if (minLevels[i] === void 0 || minLevels[i] >= level) {
                    minLevels[i] = level;
                }
            }
        }
    },
);

const getRowMemberStyle = (i: number, j: number) => {
    const currentMember = props.rows?.[i]?.[j];
    const nextMember = props.rows?.[i - 1]?.[j];

    const styles = {} as { [key: string]: string };

    const levelCount = minLevels[j] === 0 ? maxLevels[j] + 1 : maxLevels[j];

    styles["width"] = `${50 * (levelCount - 1) + 150}px`;
    if (!currentMember || !nextMember) return styles;

    if (currentMember.UName === nextMember.UName) {
        styles["border-top"] = "none";
    }
    return styles;
};

const getRowHeaderStyle = (i: number) => {
    return {
        height: `${props.rowsStyles[i] || DEFAULT_ROW_HEIGHT}px`,

        transform: `translate(0, ${translate.value}px)`,
    };
};

const getRowMemberOffsetItems = (i: number, j: number) => {
    const currentMember = props.rows?.[i]?.[j];

    let result = "";
    for (let ind = minLevels[j]; ind < currentMember.LNum; ind++) {
        result += "<div class='rowMemberOffset'></div>";
    }
    return result;
};

const getRowChildCount = (i: number, j: number) => {
    const currentMember = props.rows?.[i]?.[j];
    return currentMember.DisplayInfo & MDDISPINFO_CHILD_COUNT;
};

const hasChildrenDisplayed = (i: number, j: number) => {
    const currentMember = props.rows?.[i]?.[j];
    if (i + 1 === props.rows.length) return false;
    const currentHierarchyMembers = props.rows.map((e: any) => e[j]);

    if (
        currentHierarchyMembers.some(
            (e: any) => e && e.PARENT_UNIQUE_NAME === currentMember.UName,
        )
    ) {
        return true;
    }
    return false;
};

const rowIsExpanded = (i: number, j: number) => {
    const currentMember = props.rows?.[i]?.[j];

    if (props.rowsExpandedMembers) {
        return props.rowsExpandedMembers.some(
            (e: any) => e.UName === currentMember.UName,
        );
    }

    return false;
};

const sameAsPrevious = (i: number, j: number) => {
    const currentMember = props.rows?.[i]?.[j];
    const prevMember = props.rows?.[i - 1]?.[j];

    if (!currentMember || !prevMember) return false;
    return currentMember.UName === prevMember.UName;
};

let resizeInProg = false;
let itemResized: number = -1;

const onStartResize = (e: MouseEvent, i: number) => {
    if (e.button === 0) {
        itemResized = i;
        resizeInProg = true;
    }
};
const onStopResize = () => {
    resizeInProg = false;
};
const onResize = (e: MouseEvent) => {
    if (resizeInProg) {
        const rowStyles =
            (props.rowsStyles[itemResized] || DEFAULT_ROW_HEIGHT) + e.movementY;
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

const rowsContainer = ref(null) as unknown as Ref<HTMLElement>;
const currentlyDisplayedValues = computed(() => {
    if (!rowsContainer.value)
        return {
            data: [],
            translate: translate.value,
        };

    let translateValue = translate.value;
    let result = props.rows.map((rowMembers: any, i: any) => {
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
            scrollPosition.value + rowsContainer.value.clientHeight;
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
            <MemberDropdown v-else v-for="(member, j) in row" :key="member.UNAME"
                :propertiesShown="isMemberPropsVisible(member)" @drilldown="drilldown(member)"
                @drillup="drillup(member)" @openMemberProperties="openMemberProperties(member)"
                @showMemberProperties="showMemberProperties(member)"
                @hideMemberProperties="hideMemberProperties(member)">
                <template v-slot="{ }">
                    <div class="d-flex">
                        <div class="rowMember" :style="getRowMemberStyle(member.i, j)">
                            <div class="rowMemberContentWrapper">
                                <div class="rowMemberOffsetContainer" v-html="getRowMemberOffsetItems(member.i, j)
                                    "></div>
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
                        <div v-if="row.i > 0" class="row_dragAreaTop" @mousedown="onStartResize($event, member.i - 1)">
                        </div>
                    </div>
                </template>
            </MemberDropdown>
        </div>
    </div>
</template>
<style>
.rowsHeader:last-child {
    border-bottom: 1px silver solid;
}

.rowsHeader_container {
    height: 100%;
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
    border-top: 1px silver solid;
}

.rowMemberOffset {
    width: 50px;
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
    border-left: 1px silver solid;
    align-items: flex-start;
}

.rowMemberCaption {
    font-weight: 600;
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
    font-style: italic;
    font-weight: 500;
}
</style>
