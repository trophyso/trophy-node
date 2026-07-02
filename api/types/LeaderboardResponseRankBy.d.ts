/** What the leaderboard ranks by. */
export declare const LeaderboardResponseRankBy: {
    readonly Points: "points";
    readonly Streak: "streak";
    readonly Metric: "metric";
};
export type LeaderboardResponseRankBy = (typeof LeaderboardResponseRankBy)[keyof typeof LeaderboardResponseRankBy];
