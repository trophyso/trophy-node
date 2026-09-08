import type * as TrophyApi from "../index";
/**
 * The organization's streak configuration.
 */
export interface StreakSettings {
    frequency: TrophyApi.AdminStreakFrequency;
    evaluationMode: TrophyApi.AdminStreakEvaluationMode;
    /** Whether users can override streak evaluation mode, metric thresholds, and days off via preferences. */
    customizationEnabled: boolean;
    /** Days of the week that do not count toward the daily streak. Represented as zero-based integers matching JavaScript `Date.getDay()` (0 = Sunday, 6 = Saturday). */
    daysOff: number[];
    /** Metrics with a streak threshold greater than zero. */
    metrics: TrophyApi.StreakSettingsMetric[];
    /** Freeze configuration, or `null` when streak freezes are disabled. */
    freezes?: TrophyApi.StreakSettingsFreezes;
}
