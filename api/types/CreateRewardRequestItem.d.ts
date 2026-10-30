import type * as TrophyApi from "../index";
/**
 * A reward to create. Optionally include triggers.
 */
export interface CreateRewardRequestItem {
    /** The reward name. */
    name: string;
    /** The reward key. Only alphanumeric characters, hyphens, and underscores are permitted. */
    key: string;
    /** A short description of the reward. */
    description?: string;
    /** The status of the reward. Defaults to 'inactive'. */
    status?: TrophyApi.CreateRewardRequestItemStatus;
    /** The type of reward. `points` rewards grant points when redeemed. `custom` rewards are fulfilled by your own system. */
    type: TrophyApi.CreateRewardRequestItemType;
    /** Required if type is `points`. The UUID of the points system to grant points in. */
    pointsSystemId?: string;
    /** Required if type is `points`. The number of points to grant. */
    points?: number;
    /** The maximum number of times a user can be awarded the reward. Null means unlimited. */
    maxRedemptions?: number;
    /** Optional user attribute filters. Only users who match are awarded the reward. */
    userAttributes?: TrophyApi.CreateRewardRequestItemUserAttributesItem[];
    /** Optional array of triggers to create alongside the reward. */
    triggers?: TrophyApi.CreateRewardTriggerRequestItem[];
}
