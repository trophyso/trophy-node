import type * as TrophyApi from "../index";
export interface UpdateRewardTriggersRequestItem {
    /** The UUID of the trigger to update. */
    id: string;
    /** Updated trigger type. Can only be changed when the trigger is inactive. Required fields for the new type must be provided. */
    type?: TrophyApi.UpdateRewardTriggersRequestItemType;
    /** Updated status. */
    status?: TrophyApi.UpdateRewardTriggersRequestItemStatus;
    /** Updated user attribute filters. Set to null to clear. */
    userAttributes?: TrophyApi.UpdateRewardTriggersRequestItemUserAttributesItem[];
    /** Updated metric ID. Only permitted for metric triggers. */
    metricId?: string;
    /** Updated metric threshold. Only permitted for metric triggers. */
    metricThreshold?: number;
    /** Updated event attribute filters. Only permitted for metric triggers. Set to null to clear. */
    eventAttributes?: TrophyApi.UpdateRewardTriggersRequestItemEventAttributesItem[];
    /** Updated achievement ID. Only permitted for achievement triggers. */
    achievementId?: string;
    /** Updated streak length. Only permitted for streak triggers. */
    streakLength?: number;
    /** Updated leaderboard ID. Only permitted for leaderboard triggers. */
    leaderboardId?: string;
    /** Updated rank. Only permitted for leaderboard triggers. */
    rank?: number;
}
