/** Updated trigger type. Can only be changed when the trigger is inactive. Required fields for the new type must be provided. */
export declare const UpdateRewardTriggersRequestItemType: {
    readonly Metric: "metric";
    readonly Achievement: "achievement";
    readonly Streak: "streak";
    readonly Leaderboard: "leaderboard";
};
export type UpdateRewardTriggersRequestItemType = (typeof UpdateRewardTriggersRequestItemType)[keyof typeof UpdateRewardTriggersRequestItemType];
