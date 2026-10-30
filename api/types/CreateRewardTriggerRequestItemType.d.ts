/** The type of trigger. */
export declare const CreateRewardTriggerRequestItemType: {
    readonly Metric: "metric";
    readonly Achievement: "achievement";
    readonly Streak: "streak";
    readonly Leaderboard: "leaderboard";
};
export type CreateRewardTriggerRequestItemType = (typeof CreateRewardTriggerRequestItemType)[keyof typeof CreateRewardTriggerRequestItemType];
