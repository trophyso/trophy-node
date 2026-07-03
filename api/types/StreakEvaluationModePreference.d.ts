/** Whether meeting any single metric threshold (`OR`) or all configured metric thresholds (`AND`) extends the user's streak. Matches the evaluation mode configured in dashboard streak settings. */
export declare const StreakEvaluationModePreference: {
    readonly Or: "OR";
    readonly And: "AND";
};
export type StreakEvaluationModePreference = (typeof StreakEvaluationModePreference)[keyof typeof StreakEvaluationModePreference];
