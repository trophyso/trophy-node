/** The status of the leaderboard. */
export declare const LeaderboardResponseWithRankingsStatus: {
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Finished: "finished";
};
export type LeaderboardResponseWithRankingsStatus = (typeof LeaderboardResponseWithRankingsStatus)[keyof typeof LeaderboardResponseWithRankingsStatus];
