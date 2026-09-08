import type * as TrophyApi from "../index";
/**
 * An achievement update object. `id` is required; all other fields are optional. Omitted fields are preserved. Send `null` for `description`, `badge`, or `userAttributes` to clear them.
 */
export interface UpdateAchievementRequestItem {
    /** The UUID of the achievement to update. */
    id: string;
    /** The updated achievement name. */
    name?: string;
    /** The updated trigger type. Changing trigger requires the new trigger's mandatory fields. */
    trigger?: TrophyApi.UpdateAchievementRequestItemTrigger;
    /** The updated description. Send `null` to clear. */
    description?: string;
    /** The updated status. */
    status?: TrophyApi.UpdateAchievementRequestItemStatus;
    /** The updated badge, or `null` to clear it. */
    badge?: TrophyApi.UpdateAchievementRequestItemBadge;
    /** Updated user attribute filters. Send `null` to clear. Each `attributeId` must be an active user attribute. */
    userAttributes?: TrophyApi.UpdateAchievementRequestItemUserAttributesItem[];
    /** Updated key. Only permitted for API achievements. */
    key?: string;
    /** Updated metric ID. Only permitted for metric achievements. */
    metricId?: string;
    /** Updated metric threshold. Only permitted for metric achievements. */
    metricValue?: number;
    /** Updated event attribute filters. Only permitted for metric achievements. Send `null` to clear. Each `attributeId` must be an active event attribute. */
    eventAttributes?: TrophyApi.UpdateAchievementRequestItemEventAttributesItem[];
    /** Updated streak length. Only permitted for streak achievements. */
    streakLength?: number;
    /** Updated anniversary years. Only permitted for anniversary achievements. */
    anniversaryYears?: number;
    /** Updated prerequisite achievement UUIDs. Only permitted for achievement achievements. */
    achievementIds?: string[];
}
