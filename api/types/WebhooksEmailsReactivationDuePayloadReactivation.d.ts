/**
 * Details about the reactivation message.
 */
export interface WebhooksEmailsReactivationDuePayloadReactivation {
    /** The reactivation message number in the sequence. */
    messageNumber: number;
    /** The number of days since the user was last active. */
    daysSinceLastActive: number;
}
