import type * as TrophyApi from "../index";
/**
 * A reward trigger to create.
 */
export interface CreateRewardTriggerRequestItem {
    /** The type of trigger. */
    type: TrophyApi.CreateRewardTriggerRequestItemType;
    /** The status of the trigger. Defaults to 'inactive'. */
    status?: TrophyApi.CreateRewardTriggerRequestItemStatus;
    /** Optional user attribute filters for the trigger. */
    userAttributes?: TrophyApi.CreateRewardTriggerRequestItemUserAttributesItem[];
    /** Required if type is `metric`. The UUID of the metric. */
    metricId?: string;
    /** Required if type is `metric`. The reward is awarded each time the user's metric total grows by this amount. */
    metricThreshold?: number;
    /** Optional event attribute filters. Only permitted if type is `metric`. */
    eventAttributes?: TrophyApi.CreateRewardTriggerRequestItemEventAttributesItem[];
    /** Required if type is `achievement`. The UUID of the achievement. */
    achievementId?: string;
    /** Required if type is `streak`. The number of streak periods that awards the reward. It is awarded again each time the streak grows by this many periods. */
    streakLength?: number;
    /** Required if type is `leaderboard`. The UUID of the leaderboard. */
    leaderboardId?: string;
    /** Required if type is `leaderboard`. The final rank that awards the reward. */
    rank?: number;
}
