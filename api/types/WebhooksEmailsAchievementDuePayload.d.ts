import type * as TrophyApi from "../index";
export interface WebhooksEmailsAchievementDuePayload {
    /** The webhook event type. */
    type: "emails.achievement_due";
    /** The time the webhook was sent. */
    timestamp: Date;
    /** The user the achievement message is due for. */
    user: TrophyApi.User;
    /** The achievement that was completed. */
    achievement: TrophyApi.UserAchievementResponse;
}
