import type * as TrophyApi from "../index";
/**
 * Activity data for a specific period (day, week, month, or year).
 */
export interface WrappedActivityPeriod {
    /** The user's metrics during this period, keyed by metric key. */
    metrics: Record<string, TrophyApi.WrappedMetric>;
    /** The user's points during this period, keyed by points system key. */
    points: Record<string, TrophyApi.WrappedPoints>;
    /** Achievements completed during this period. */
    achievements: TrophyApi.UserAchievementResponse[];
    /** The user's best leaderboard rankings during this period, keyed by leaderboard key. */
    leaderboards: Record<string, TrophyApi.UserLeaderboardResponse>;
}
