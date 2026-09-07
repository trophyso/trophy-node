/** Whether meeting any single metric threshold (`OR`) or all configured metric thresholds (`AND`) extends the user's streak. */
export declare const AdminStreakEvaluationMode: {
    readonly Or: "OR";
    readonly And: "AND";
};
export type AdminStreakEvaluationMode = (typeof AdminStreakEvaluationMode)[keyof typeof AdminStreakEvaluationMode];
