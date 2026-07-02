/** The type of trigger. */
export declare const AdminPointsTriggerType: {
    readonly Metric: "metric";
    readonly Achievement: "achievement";
    readonly Streak: "streak";
    readonly Time: "time";
    readonly UserCreation: "user_creation";
};
export type AdminPointsTriggerType = (typeof AdminPointsTriggerType)[keyof typeof AdminPointsTriggerType];
