/** The current user-facing status of the leaderboard. */
export declare const AdminLeaderboardStatus: {
    readonly Inactive: "inactive";
    readonly Active: "active";
    readonly Scheduled: "scheduled";
    readonly Finished: "finished";
};
export type AdminLeaderboardStatus = (typeof AdminLeaderboardStatus)[keyof typeof AdminLeaderboardStatus];
