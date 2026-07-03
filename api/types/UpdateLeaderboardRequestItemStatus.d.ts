/** The target user-facing status. `scheduled` activates a leaderboard whose start date is in the future. `finished` behaves like the dashboard finish action. */
export declare const UpdateLeaderboardRequestItemStatus: {
    readonly Inactive: "inactive";
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Finished: "finished";
};
export type UpdateLeaderboardRequestItemStatus = (typeof UpdateLeaderboardRequestItemStatus)[keyof typeof UpdateLeaderboardRequestItemStatus];
