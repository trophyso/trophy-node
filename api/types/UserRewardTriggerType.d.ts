export declare const UserRewardTriggerType: {
    readonly Metric: "metric";
    readonly Achievement: "achievement";
    readonly Streak: "streak";
    readonly Leaderboard: "leaderboard";
};
export type UserRewardTriggerType = (typeof UserRewardTriggerType)[keyof typeof UserRewardTriggerType];
