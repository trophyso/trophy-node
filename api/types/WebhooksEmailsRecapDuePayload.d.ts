import type * as TrophyApi from "../index";
export interface WebhooksEmailsRecapDuePayload {
    /** The webhook event type. */
    type: "emails.recap_due";
    /** The time the webhook was sent. */
    timestamp: Date;
    /** The user the recap is due for. */
    user: TrophyApi.User;
    /** Details about the recap period. */
    recap: TrophyApi.WebhooksEmailsRecapDuePayloadRecap;
}
