/** The recurrence unit when the leaderboard repeats. */
export declare const AdminLeaderboardRunUnit: {
    readonly Day: "day";
    readonly Month: "month";
    readonly Year: "year";
};
export type AdminLeaderboardRunUnit = (typeof AdminLeaderboardRunUnit)[keyof typeof AdminLeaderboardRunUnit];
