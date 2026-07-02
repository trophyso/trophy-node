import type * as TrophyApi from "../../../../index";
/**
 * @example
 *     {
 *         notifications: {
 *             streakReminder: ["email"]
 *         }
 *     }
 *
 * @example
 *     {
 *         notifications: {
 *             recap: ["email"]
 *         }
 *     }
 *
 * @example
 *     {
 *         notifications: {
 *             achievementCompleted: ["email", "push"]
 *         }
 *     }
 *
 * @example
 *     {
 *         streak: {
 *             evaluationMode: "OR",
 *             metrics: [{
 *                     key: "words-written",
 *                     threshold: 500
 *                 }]
 *         }
 *     }
 */
export interface UpdateUserPreferencesRequest {
    notifications?: TrophyApi.NotificationPreferences;
    streak?: TrophyApi.StreakPreferences;
}
