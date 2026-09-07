/** The achievement trigger type. */
export declare const AdminAchievementTrigger: {
    readonly Metric: "metric";
    readonly Streak: "streak";
    readonly Api: "api";
    readonly Achievement: "achievement";
    readonly Anniversary: "anniversary";
};
export type AdminAchievementTrigger = (typeof AdminAchievementTrigger)[keyof typeof AdminAchievementTrigger];
