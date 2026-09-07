/** The achievement trigger type. */
export declare const CreateAchievementRequestItemTrigger: {
    readonly Metric: "metric";
    readonly Streak: "streak";
    readonly Api: "api";
    readonly Achievement: "achievement";
    readonly Anniversary: "anniversary";
};
export type CreateAchievementRequestItemTrigger = (typeof CreateAchievementRequestItemTrigger)[keyof typeof CreateAchievementRequestItemTrigger];
