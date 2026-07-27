/**
 * The user that triggered a batch metric event.
 */
export interface BatchMetricEventUser {
    /** The ID of the user in your database. Must be a string. */
    id: string;
    /** The user's email address. Required if subscribeToEmails is true. */
    email?: string;
    /** The name to refer to the user by in emails. */
    name?: string;
    /** The user's timezone (used for email scheduling). */
    tz?: string;
    /** The user's device tokens, used for push notifications. */
    deviceTokens?: string[];
    /** Whether the user should receive Trophy-powered emails. If false, Trophy will not store the user's email address. */
    subscribeToEmails?: boolean;
    /** User attributes as key-value pairs. Keys must match existing user attributes set up in the Trophy dashboard. */
    attributes?: Record<string, string>;
}
