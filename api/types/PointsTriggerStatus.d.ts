/** The status of the trigger. */
export declare const PointsTriggerStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
};
export type PointsTriggerStatus = (typeof PointsTriggerStatus)[keyof typeof PointsTriggerStatus];
