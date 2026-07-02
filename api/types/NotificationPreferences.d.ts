import type * as TrophyApi from "../index";
/**
 * Notification preferences for each notification type.
 */
export interface NotificationPreferences {
    /** Channels to receive achievement completion notifications on. */
    achievementCompleted?: TrophyApi.NotificationChannel[];
    /** Channels to receive recap notifications on. */
    recap?: TrophyApi.NotificationChannel[];
    /** Channels to receive reactivation notifications on. */
    reactivation?: TrophyApi.NotificationChannel[];
    /** Channels to receive streak reminder notifications on. */
    streakReminder?: TrophyApi.NotificationChannel[];
}
