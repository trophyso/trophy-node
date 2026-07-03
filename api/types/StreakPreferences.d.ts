import type * as TrophyApi from "../index";
/**
 * Per-user streak configuration. Metric and evaluation mode overrides require streak customization to be enabled in dashboard settings.
 */
export interface StreakPreferences {
    /** Whether streaks are calculated for this user. When false, the user's streak is always 0 and streak webhooks and notifications are not sent. */
    enabled?: boolean;
    evaluationMode?: TrophyApi.StreakEvaluationModePreference;
    /** Metrics and thresholds that count toward this user's streak. */
    metrics?: TrophyApi.StreakMetricPreference[];
}
