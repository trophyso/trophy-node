/** The trigger of the achievement. */
export declare const AchievementResponseTrigger: {
    readonly Metric: "metric";
    readonly Streak: "streak";
    readonly Api: "api";
    readonly Achievement: "achievement";
};
export type AchievementResponseTrigger = (typeof AchievementResponseTrigger)[keyof typeof AchievementResponseTrigger];
