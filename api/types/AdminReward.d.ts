import type * as TrophyApi from "../index";
/**
 * A reward returned from the admin rewards endpoints.
 */
export interface AdminReward {
    /** The UUID of the reward. */
    id: string;
    /** The reward name. */
    name: string;
    /** The reward key. */
    key: string;
    /** The reward description. */
    description?: string;
    /** The reward status. */
    status: TrophyApi.AdminRewardStatus;
    /** The type of reward. */
    type: TrophyApi.AdminRewardType;
    /** The UUID of the points system. Only present for points rewards. */
    pointsSystemId?: string;
    /** The number of points granted. Only present for points rewards. */
    points?: number;
    /** The maximum number of times a user can be awarded the reward. Null means unlimited. */
    maxRedemptions?: number;
    /** User attribute filters applied to the reward. */
    userAttributes: TrophyApi.AdminRewardUserAttributesItem[];
}
