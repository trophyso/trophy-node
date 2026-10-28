/** The type of trigger. */
export declare const AdminRewardTriggerType: {
    readonly Metric: "metric";
    readonly Achievement: "achievement";
    readonly Streak: "streak";
    readonly Leaderboard: "leaderboard";
};
export type AdminRewardTriggerType = (typeof AdminRewardTriggerType)[keyof typeof AdminRewardTriggerType];
