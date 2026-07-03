/** The updated ranking criterion. This can only be changed while the leaderboard is inactive. */
export declare const UpdateLeaderboardRequestItemRankBy: {
    readonly Metric: "metric";
    readonly Streak: "streak";
    readonly Points: "points";
};
export type UpdateLeaderboardRequestItemRankBy = (typeof UpdateLeaderboardRequestItemRankBy)[keyof typeof UpdateLeaderboardRequestItemRankBy];
