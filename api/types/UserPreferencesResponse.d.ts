import type * as TrophyApi from "../index";
/**
 * A user's preferences.
 */
export interface UserPreferencesResponse {
    notifications: TrophyApi.NotificationPreferences;
    streak?: TrophyApi.StreakPreferences;
}
