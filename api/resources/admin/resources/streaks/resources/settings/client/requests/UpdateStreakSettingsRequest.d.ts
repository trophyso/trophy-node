import type * as TrophyApi from "../../../../../../../../index";
/**
 * @example
 *     {
 *         frequency: "daily",
 *         evaluationMode: "OR",
 *         customizationEnabled: true,
 *         daysOff: [0, 6],
 *         metrics: [{
 *                 key: "words-written",
 *                 threshold: 500
 *             }],
 *         freezes: {
 *             startCount: 1,
 *             maxCount: 2,
 *             autoEarnInterval: 7,
 *             autoEarnAmount: 1
 *         }
 *     }
 *
 * @example
 *     {}
 */
export interface UpdateStreakSettingsRequest {
    frequency?: TrophyApi.AdminStreakFrequency;
    evaluationMode?: TrophyApi.AdminStreakEvaluationMode;
    /** Whether users can override streak evaluation mode, metric thresholds, and days off via preferences. */
    customizationEnabled?: boolean;
    /** Days of the week that do not count toward the daily streak. A non-empty array is only allowed when the resulting frequency is `daily`. Changing frequency away from `daily` clears stored days off even when this field is omitted. */
    daysOff?: number[];
    /** Replacement list of streak metrics. Keys must be unique and must exist on the organization. */
    metrics?: TrophyApi.StreakSettingsMetric[];
    /** Replacement freeze configuration, or `null` to disable freezes. */
    freezes?: TrophyApi.UpdateStreakSettingsFreezes;
}
