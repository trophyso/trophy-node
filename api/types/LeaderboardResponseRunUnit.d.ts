/** The repetition type for recurring leaderboards, or null for one-time leaderboards. */
export declare const LeaderboardResponseRunUnit: {
    readonly Day: "day";
    readonly Month: "month";
    readonly Year: "year";
};
export type LeaderboardResponseRunUnit = (typeof LeaderboardResponseRunUnit)[keyof typeof LeaderboardResponseRunUnit];
