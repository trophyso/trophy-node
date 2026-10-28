/** The type of reward. */
export declare const AdminRewardType: {
    readonly Points: "points";
    readonly Custom: "custom";
};
export type AdminRewardType = (typeof AdminRewardType)[keyof typeof AdminRewardType];
