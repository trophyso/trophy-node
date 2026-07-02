import type * as TrophyApi from "../index";
export interface WebhooksStreakLostPayload {
    /** The webhook event type. */
    type: "streak.lost";
    /** The user who lost the streak. */
    user: TrophyApi.User;
    /** The length of the streak that was lost. */
    length: number;
}
