/** The time unit. Only present for time triggers. */
export declare const AdminPointsTriggerTimeUnit: {
    readonly Hours: "hours";
    readonly Days: "days";
};
export type AdminPointsTriggerTimeUnit = (typeof AdminPointsTriggerTimeUnit)[keyof typeof AdminPointsTriggerTimeUnit];
