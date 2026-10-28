/** Updated type. Changing to `points` requires pointsSystemId and points if the reward has none. */
export declare const UpdateRewardRequestItemType: {
    readonly Points: "points";
    readonly Custom: "custom";
};
export type UpdateRewardRequestItemType = (typeof UpdateRewardRequestItemType)[keyof typeof UpdateRewardRequestItemType];
