/** What the leaderboard ranks by. */
export declare const CreateLeaderboardRequestItemRankBy: {
    readonly Metric: "metric";
    readonly Streak: "streak";
    readonly Points: "points";
};
export type CreateLeaderboardRequestItemRankBy = (typeof CreateLeaderboardRequestItemRankBy)[keyof typeof CreateLeaderboardRequestItemRankBy];
