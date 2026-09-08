import type * as TrophyApi from "../index";
/**
 * An achievement to create. Trigger-specific fields are required based on `trigger`. `status` defaults to `inactive`.
 */
export interface CreateAchievementRequestItem {
    /** The achievement name. */
    name: string;
    /** The achievement trigger type. */
    trigger: TrophyApi.CreateAchievementRequestItemTrigger;
    /** A short description of the achievement. */
    description?: string;
    /** The achievement status. Defaults to `inactive`. */
    status?: TrophyApi.CreateAchievementRequestItemStatus;
    /** An optional badge for the achievement. */
    badge?: TrophyApi.CreateAchievementRequestItemBadge;
    /** User attribute filters applied to the achievement. Each `attributeId` must be an active user attribute. */
    userAttributes?: TrophyApi.CreateAchievementRequestItemUserAttributesItem[];
    /** Required if trigger is `api`. Only alphanumeric characters, hyphens, and underscores are permitted. */
    key?: string;
    /** Required if trigger is `metric`. The UUID of the metric. */
    metricId?: string;
    /** Required if trigger is `metric`. The metric threshold users must reach. Must be at least 1. */
    metricValue?: number;
    /** Event attribute filters. Only permitted for metric achievements. Each `attributeId` must be an active event attribute. */
    eventAttributes?: TrophyApi.CreateAchievementRequestItemEventAttributesItem[];
    /** Required if trigger is `streak`. The streak length users must reach. Must be at least 1. */
    streakLength?: number;
    /** Required if trigger is `anniversary`. The number of years since sign-up. Must be at least 1. */
    anniversaryYears?: number;
    /** Required if trigger is `achievement`. UUIDs of prerequisite achievements. */
    achievementIds?: string[];
}
