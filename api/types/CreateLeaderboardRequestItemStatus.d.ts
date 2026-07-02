/** The initial user-facing status. Defaults to `inactive`. Use `scheduled` for leaderboards that should be active in the future and `finished` only when creating a leaderboard with an end date in the past. */
export declare const CreateLeaderboardRequestItemStatus: {
    readonly Inactive: "inactive";
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Finished: "finished";
};
export type CreateLeaderboardRequestItemStatus = (typeof CreateLeaderboardRequestItemStatus)[keyof typeof CreateLeaderboardRequestItemStatus];
