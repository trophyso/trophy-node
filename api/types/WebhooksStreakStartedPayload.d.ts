import type * as TrophyApi from "../index";
export interface WebhooksStreakStartedPayload {
    /** The webhook event type. */
    type: "streak.started";
    /** The user who started the streak. */
    user: TrophyApi.User;
    /** The streak that was started. */
    streak: TrophyApi.BaseStreakResponse;
}
