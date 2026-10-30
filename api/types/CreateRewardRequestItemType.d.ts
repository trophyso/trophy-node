/** The type of reward. `points` rewards grant points when redeemed. `custom` rewards are fulfilled by your own system. */
export declare const CreateRewardRequestItemType: {
    readonly Points: "points";
    readonly Custom: "custom";
};
export type CreateRewardRequestItemType = (typeof CreateRewardRequestItemType)[keyof typeof CreateRewardRequestItemType];
