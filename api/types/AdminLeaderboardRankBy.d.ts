/** What the leaderboard ranks by. */
export declare const AdminLeaderboardRankBy: {
    readonly Metric: "metric";
    readonly Streak: "streak";
    readonly Points: "points";
};
export type AdminLeaderboardRankBy = (typeof AdminLeaderboardRankBy)[keyof typeof AdminLeaderboardRankBy];
