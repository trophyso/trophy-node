import type * as TrophyApi from "../index";
/**
 * An achievement as returned from admin endpoints. Trigger-specific fields are only present for the matching trigger type.
 */
export interface AdminAchievement {
    /** The UUID of the achievement. */
    id: string;
    /** The achievement name. */
    name: string;
    /** A short description of the achievement. */
    description?: string;
    /** The achievement trigger type. */
    trigger: TrophyApi.AdminAchievementTrigger;
    /** The achievement status. */
    status: TrophyApi.AdminAchievementStatus;
    /** The badge for the achievement, or null if no badge is set. */
    badge?: TrophyApi.AdminAchievementBadge;
    /** User attribute filters applied to the achievement. */
    userAttributes: TrophyApi.AdminAchievementUserAttributesItem[];
    /** The achievement key. Only present for API achievements. */
    key?: string;
    /** The UUID of the metric. Only present for metric achievements. */
    metricId?: string;
    /** The metric threshold. Only present for metric achievements. */
    metricValue?: number;
    /** Event attribute filters. Only present for metric achievements. */
    eventAttributes?: TrophyApi.AdminAchievementEventAttributesItem[];
    /** The streak length. Only present for streak achievements. */
    streakLength?: number;
    /** The anniversary years. Only present for anniversary achievements. */
    anniversaryYears?: number;
    /** Prerequisite achievement UUIDs. Only present for achievement achievements. */
    achievementIds?: string[];
}
