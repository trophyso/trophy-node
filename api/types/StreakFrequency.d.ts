export declare const StreakFrequency: {
    readonly Daily: "daily";
    readonly Weekly: "weekly";
    readonly Monthly: "monthly";
};
export type StreakFrequency = (typeof StreakFrequency)[keyof typeof StreakFrequency];
