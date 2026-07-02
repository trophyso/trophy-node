import type * as TrophyApi from "../index";
export interface WebhooksAchievementCompletedPayload {
    /** The webhook event type. */
    type: "achievement.completed";
    /** The user who completed the achievement. */
    user: TrophyApi.User;
    /** The achievement completion that occurred. */
    achievement: TrophyApi.UserAchievementResponse;
}
