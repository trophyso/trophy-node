/** The type of trigger */
export declare const PointsTriggerType: {
    readonly Metric: "metric";
    readonly Achievement: "achievement";
    readonly Streak: "streak";
    readonly Time: "time";
    readonly UserCreation: "user_creation";
    readonly Reward: "reward";
};
export type PointsTriggerType = (typeof PointsTriggerType)[keyof typeof PointsTriggerType];
