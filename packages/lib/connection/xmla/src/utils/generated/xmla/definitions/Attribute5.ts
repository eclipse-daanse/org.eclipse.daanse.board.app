/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/
import type { Source1 } from "./Source1";
import type { KeyColumns1 } from "./KeyColumns1";
import type { Source } from "./Source";
import type { Translations8 } from "./Translations8";
import type { AttributeRelationships } from "./AttributeRelationships";
import type { NamingTemplateTranslations } from "./NamingTemplateTranslations";
import type { Annotations40 } from "./Annotations40";
import type { VisualizationProperties1 } from "./VisualizationProperties1";

/**
 * Attribute
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Attribute5 {
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Description?: string;
  /** DimensionAttributeTypeEnumType|xsd:string|Account,AccountName,AccountNumber,AccountType,Address,AddressBuilding,AddressCity,AddressCountry,AddressFax,AddressFloor,AddressHouse,AddressPhone,AddressQuarter,AddressRoom,AddressStateOrProvince,AddressStreet,AddressZip,BomResource,Caption,CaptionAbbreviation,CaptionDescription,Channel,City,Company,Continent,Country,County,CurrencyDestination,CurrencyIsoCode,CurrencyName,CurrencySource,CustomerGroup,CustomerHousehold,Customers,Date,DateCanceled,DateDuration,DateEnded,DateModified,DateStart,DayOfHalfYear,DayOfMonth,DayOfQuarter,DayOfTenDays,DayOfTrimester,DayOfWeek,DayOfYear,Days,DeletedFlag,ExtendedType,FiscalDate,FiscalDayOfHalfYear,FiscalDayOfMonth,FiscalDayOfQuarter,FiscalDayOfTrimester,FiscalDayOfWeek,FiscalDayOfYear,FiscalHalfYears,FiscalHalfYearOfYear,FiscalMonths,FiscalMonthOfHalfYear,FiscalMonthOfQuarter,FiscalMonthOfTrimester,FiscalMonthOfYear,FiscalQuarters,FiscalQuarterOfHalfYear,FiscalQuarterOfYear,FiscalTrimesters,FiscalTrimesterOfYear,FiscalWeeks,FiscalWeekOfHalfYear,FiscalWeekOfMonth,FiscalWeekOfQuarter,FiscalWeekOfTrimester,FiscalWeekOfYear,FiscalYears,FormattingColor,FormattingFont,FormattingFontEffects,FormattingFontSize,FormattingOrder,FormattingSubtotal,GeoBoundaryBottom,GeoBoundaryFront,GeoBoundaryLeft,GeoBoundaryPolygon,GeoBoundaryRear,GeoBoundaryRight,GeoBoundaryTop,GeoCentroidX,GeoCentroidY,GeoCentroidZ,HalfYears,HalfYearOfYear,Hours,ID,Image,ImageBmp,ImageGif,ImageJpg,ImagePng,ImageTiff,ImageUrl,IsHoliday,Iso8601Date,Iso8601DayOfWeek,Iso8601DayOfYear,Iso8601Weeks,Iso8601WeekOfYear,Iso8601Years,IsPeakDay,IsWeekDay,IsWorkingDay,ManufacturingDate,ManufacturingDayOfHalfYear,ManufacturingDayOfMonth,ManufacturingDayOfQuarter,ManufacturingDayOfWeek,ManufacturingDayOfYear,ManufacturingHalfYears,ManufacturingHalfYearOfYear,ManufacturingMonths,ManufacturingMonthOfHalfYear,ManufacturingMonthOfQuarter,ManufacturingMonthOfYear,ManufacturingQuarters,ManufacturingQuarterOfHalfYear,ManufacturingQuarterOfYear,ManufacturingWeeks,ManufacturingWeekOfHalfYear,ManufacturingWeekOfMonth,ManufacturingWeekOfQuarter,ManufacturingWeekOfYear,ManufacturingYears,Minutes,Months,MonthOfHalfYear,MonthOfQuarter,MonthOfTrimester,MonthOfYear,OrganizationalUnit,OrgTitle,PercentOwnership,PercentVoteRight,Person,PersonContact,PersonDemographic,PersonFirstName,PersonFullName,PersonLastName,PersonMiddleName,PhysicalColor,PhysicalDensity,PhysicalDepth,PhysicalHeight,PhysicalSize,PhysicalVolume,PhysicalWeight,PhysicalWidth,Point,PostalCode,Product,ProductBrand,ProductCategory,ProductGroup,ProductSKU,Project,ProjectCode,ProjectCompletion,ProjectEndDate,ProjectName,ProjectStartDate,Promotion,QtyRangeHigh,QtyRangeLow,Quantitative,Quarters,QuarterOfHalfYear,QuarterOfYear,Rate,RateType,Region,Regular,RelationToParent,ReportingDate,ReportingDayOfHalfYear,ReportingDayOfMonth,ReportingDayOfQuarter,ReportingDayOfTrimester,ReportingDayOfWeek,ReportingDayOfYear,ReportingHalfYears,ReportingHalfYearOfYear,ReportingMonths,ReportingMonthOfHalfYear,ReportingMonthOfQuarter,ReportingMonthOfTrimester,ReportingMonthOfYear,ReportingQuarters,ReportingQuarterOfHalfYear,ReportingQuarterOfYear,ReportingTrimesters,ReportingTrimesterOfYear,ReportingWeeks,ReportingWeekOfHalfYear,ReportingWeekOfMonth,ReportingWeekOfQuarter,ReportingWeekOfTrimester,ReportingWeekOfYear,ReportingYears,Representative,RowNumber,ScdEndDate,ScdOriginalID,ScdStartDate,ScdStatus,Scenario,Seconds,Sequence,ShortCaption,StateOrProvince,TenDay,TenDayOfHalfYear,TenDayOfMonth,TenDayOfQuarter,TenDayOfTrimester,TenDayOfYear,Trimesters,TrimesterOfYear,UndefinedTime,Utility,Version,WebHtml,WebMailAlias,WebUrl,WebXmlOrXsl,WeekOfYear,Weeks,WinterSummerSeason,Years */
  Type?: string;
  /** xsd:string|Regular,Key,Parent */
  Usage?: string;
  /** Source */
  Source?: Source1;
  /** xsd:long */
  EstimatedCount?: string;
  /** KeyColumns */
  KeyColumns?: KeyColumns1;
  /** NameColumn */
  NameColumn?: Source;
  /** ValueColumn */
  ValueColumn?: Source;
  /** Translations */
  Translations?: Translations8;
  /** AttributeRelationships */
  AttributeRelationships?: AttributeRelationships;
  /** xsd:string|None,Automatic,EqualAreas,Clusters,Thresholds,UserDefined */
  DiscretizationMethod?: string;
  /** xsd:integer */
  DiscretizationBucketCount?: string;
  /** xsd:string|ParentIsBlankSelfOrMissing,ParentIsBlank,ParentIsSelf,ParentIsMissing */
  RootMemberIf?: string;
  /** xsd:string|Key,Name,AttributeKey,AttributeName */
  OrderBy?: string;
  /** xsd:string */
  DefaultMember?: string;
  /** xsd:string */
  OrderByAttributeID?: string;
  /** SkippedLevelsColumn */
  SkippedLevelsColumn?: Source;
  /** xsd:string */
  NamingTemplate?: string;
  /** xsd:string|NonLeafDataHidden,NonLeafDataVisible */
  MembersWithData?: string;
  /** xsd:string */
  MembersWithDataCaption?: string;
  /** NamingTemplateTranslations */
  NamingTemplateTranslations?: NamingTemplateTranslations;
  /** CustomRollupColumn */
  CustomRollupColumn?: Source;
  /** CustomRollupPropertiesColumn */
  CustomRollupPropertiesColumn?: Source;
  /** UnaryOperatorColumn */
  UnaryOperatorColumn?: Source;
  /** xsd:boolean */
  AttributeHierarchyOrdered?: string;
  /** xsd:boolean */
  MemberNamesUnique?: string;
  /** xsd:boolean */
  IsAggregatable?: string;
  /** xsd:boolean */
  AttributeHierarchyEnabled?: string;
  /** xsd:string|FullyOptimized,NotOptimized */
  AttributeHierarchyOptimizedState?: string;
  /** xsd:boolean */
  AttributeHierarchyVisible?: string;
  /** xsd:string */
  AttributeHierarchyDisplayFolder?: string;
  /** xsd:boolean */
  KeyUniquenessGuarantee?: string;
  /** xsd:string|EncourageGrouping,DiscourageGrouping */
  GroupingBehavior?: string;
  /** xsd:string|None,DropDown,List,FilteredList,MandatoryFilter */
  InstanceSelection?: string;
  /** Annotations */
  Annotations?: Annotations40;
  /** xsd:string|Processed,Unprocessed,InvalidExpression,CalculationError,DependencyError */
  ProcessingState?: string;
  /** AttributeHierarchyProcessingState|xsd:string|Processed,Unprocessed,DependencyError */
  AttributeHierarchyProcessingState?: string;
  /** VisualizationProperties */
  VisualizationProperties?: VisualizationProperties1;
  /** xsd:string */
  ExtendedType?: string;
}
