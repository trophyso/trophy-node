/** How often the leaderboard repeats. Omit for a non-recurring leaderboard. Streak leaderboards cannot repeat. */
export declare const CreateLeaderboardRequestItemRunUnit: {
    readonly Day: "day";
    readonly Month: "month";
    readonly Year: "year";
};
export type CreateLeaderboardRequestItemRunUnit = (typeof CreateLeaderboardRequestItemRunUnit)[keyof typeof CreateLeaderboardRequestItemRunUnit];
