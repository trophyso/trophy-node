/** The status of the trigger. Only active triggers award the reward. */
export declare const AdminRewardTriggerStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
export type AdminRewardTriggerStatus = (typeof AdminRewardTriggerStatus)[keyof typeof AdminRewardTriggerStatus];
