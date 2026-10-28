import type * as TrophyApi from "../index";
/**
 * The trigger that awarded the reward, as it is configured now. Only the fields for the trigger's current type are included.
 */
export interface UserRewardTrigger {
    id: string;
    type: TrophyApi.UserRewardTriggerType;
    /** For metric triggers, the ID of the metric. */
    metricId?: string;
    /** For metric triggers, the reward is awarded each time the user's total for the metric increases by this amount. */
    metricThreshold?: number;
    /** For achievement triggers, the ID of the achievement. */
    achievementId?: string;
    /** For streak triggers, the reward is awarded every this many periods of the user's streak. */
    streakLengthThreshold?: number;
    /** For leaderboard triggers, the ID of the leaderboard. */
    leaderboardId?: string;
    /** For leaderboard triggers, the rank a user must finish a leaderboard run at. */
    rank?: number;
}
