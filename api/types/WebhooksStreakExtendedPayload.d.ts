import type * as TrophyApi from "../index";
export interface WebhooksStreakExtendedPayload {
    /** The webhook event type. */
    type: "streak.extended";
    /** The user who extended the streak. */
    user: TrophyApi.User;
    /** The streak that was extended. */
    streak: TrophyApi.BaseStreakResponse;
}
