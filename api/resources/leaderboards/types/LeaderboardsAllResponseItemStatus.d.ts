/** The status of the leaderboard. */
export declare const LeaderboardsAllResponseItemStatus: {
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Finished: "finished";
};
export type LeaderboardsAllResponseItemStatus = (typeof LeaderboardsAllResponseItemStatus)[keyof typeof LeaderboardsAllResponseItemStatus];
