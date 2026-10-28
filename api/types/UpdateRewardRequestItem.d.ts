import type * as TrophyApi from "../index";
/**
 * A reward update object. Only id is required; all other fields are optional. Triggers are updated through the reward triggers endpoints.
 */
export interface UpdateRewardRequestItem {
    /** The UUID of the reward to update. */
    id: string;
    /** Updated name. */
    name?: string;
    /** Updated description. Set to null to clear. */
    description?: string;
    /** Updated status. */
    status?: TrophyApi.UpdateRewardRequestItemStatus;
    /** Updated type. Changing to `points` requires pointsSystemId and points if the reward has none. */
    type?: TrophyApi.UpdateRewardRequestItemType;
    /** Updated points system ID. Only permitted for points rewards. */
    pointsSystemId?: string;
    /** Updated number of points. Only permitted for points rewards. */
    points?: number;
    /** Updated maximum awards per user. Set to null for unlimited. */
    maxRedemptions?: number;
    /** Updated user attribute filters. Set to null to clear. */
    userAttributes?: TrophyApi.UpdateRewardRequestItemUserAttributesItem[];
}
