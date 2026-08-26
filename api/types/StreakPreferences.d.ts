import type * as TrophyApi from "../index";
/**
 * Per-user streak configuration. Metric, evaluation mode, and days off overrides require streak customization to be enabled in dashboard settings.
 */
export interface StreakPreferences {
    /** Whether streaks are calculated for this user. When false, the user's streak is always 0 and streak webhooks and notifications are not sent. */
    enabled?: boolean;
    evaluationMode?: TrophyApi.StreakEvaluationModePreference;
    /** Metrics and thresholds that count toward this user's streak. */
    metrics?: TrophyApi.StreakMetricPreference[];
    /** Days of the week that do not count toward the user's daily streak. Represented as zero-based integers matching JavaScript `Date.getDay()` (0 = Sunday, 6 = Saturday). For example, `[0, 6]` means Sunday and Saturday are days off. Only applied when streak frequency is daily. Users can still increase their streak on these days; if they do not, the streak stays paused at its current length instead of being lost. */
    daysOff?: number[];
}
