import type * as TrophyApi from "../index";
export interface WebhooksStreakFreezeEarnedPayload {
    /** The webhook event type. */
    type: "streak.freeze_earned";
    /** The user who earned streak freezes. */
    user: TrophyApi.User;
    /** The number of freezes earned. */
    earned: number;
    /** The total number of freezes the user has after the event. */
    freezes: number;
}
