import type * as TrophyApi from "../index";
/**
 * A reward trigger as returned from admin endpoints.
 */
export interface AdminRewardTrigger {
    /** The UUID of the trigger. */
    id: string;
    /** The type of trigger. */
    type: TrophyApi.AdminRewardTriggerType;
    /** The status of the trigger. Only active triggers award the reward. */
    status: TrophyApi.AdminRewardTriggerStatus;
    /** User attribute filters applied to the trigger. */
    userAttributes: TrophyApi.AdminRewardTriggerUserAttributesItem[];
    /** The UUID of the metric. Only present for metric triggers. */
    metricId?: string;
    /** The metric threshold. Only present for metric triggers. */
    metricThreshold?: number;
    /** Event attribute filters applied to the trigger. Only present for metric triggers. */
    eventAttributes?: TrophyApi.AdminRewardTriggerEventAttributesItem[];
    /** The UUID of the achievement. Only present for achievement triggers. */
    achievementId?: string;
    /** The streak length. Only present for streak triggers. */
    streakLength?: number;
    /** The UUID of the leaderboard. Only present for leaderboard triggers. */
    leaderboardId?: string;
    /** The rank. Only present for leaderboard triggers. */
    rank?: number;
}
