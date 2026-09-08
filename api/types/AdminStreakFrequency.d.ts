/** The frequency at which streaks are calculated. */
export declare const AdminStreakFrequency: {
    readonly Daily: "daily";
    readonly Weekly: "weekly";
    readonly Monthly: "monthly";
};
export type AdminStreakFrequency = (typeof AdminStreakFrequency)[keyof typeof AdminStreakFrequency];
