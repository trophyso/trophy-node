/** The updated trigger type. Changing trigger requires the new trigger's mandatory fields. */
export declare const UpdateAchievementRequestItemTrigger: {
    readonly Metric: "metric";
    readonly Streak: "streak";
    readonly Api: "api";
    readonly Achievement: "achievement";
    readonly Anniversary: "anniversary";
};
export type UpdateAchievementRequestItemTrigger = (typeof UpdateAchievementRequestItemTrigger)[keyof typeof UpdateAchievementRequestItemTrigger];
