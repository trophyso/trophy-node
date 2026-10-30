/** The status of the reward. Defaults to 'inactive'. */
export declare const CreateRewardRequestItemStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
export type CreateRewardRequestItemStatus = (typeof CreateRewardRequestItemStatus)[keyof typeof CreateRewardRequestItemStatus];
