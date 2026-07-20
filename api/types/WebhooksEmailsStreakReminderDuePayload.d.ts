import type * as TrophyApi from "../index";
export interface WebhooksEmailsStreakReminderDuePayload {
    /** The webhook event type. */
    type: "emails.streak_reminder_due";
    /** The time the webhook was sent. */
    timestamp: Date;
    /** The user the streak reminder is due for. */
    user: TrophyApi.User;
    /** The user's current streak data. */
    streak: TrophyApi.StreakResponse;
}
