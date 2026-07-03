/** If the trigger has type 'time', the unit of time after which to award points */
export declare const PointsTriggerTimeUnit: {
    readonly Hour: "hour";
    readonly Day: "day";
};
export type PointsTriggerTimeUnit = (typeof PointsTriggerTimeUnit)[keyof typeof PointsTriggerTimeUnit];
