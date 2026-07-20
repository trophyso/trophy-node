import type * as TrophyApi from "../index";
export interface WebhooksEmailsReactivationDuePayload {
    /** The webhook event type. */
    type: "emails.reactivation_due";
    /** The time the webhook was sent. */
    timestamp: Date;
    /** The user the reactivation message is due for. */
    user: TrophyApi.User;
    /** Details about the reactivation message. */
    reactivation: TrophyApi.WebhooksEmailsReactivationDuePayloadReactivation;
}
