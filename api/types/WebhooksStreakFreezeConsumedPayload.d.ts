import type * as TrophyApi from "../index";
export interface WebhooksStreakFreezeConsumedPayload {
    /** The webhook event type. */
    type: "streak.freeze_consumed";
    /** The user whose streak freeze was consumed. */
    user: TrophyApi.User;
    /** The number of freezes consumed. */
    consumed: number;
    /** The total number of freezes the user has left after the consumption. */
    freezes: number;
}
