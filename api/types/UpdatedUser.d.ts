/**
 * An object with editable user fields.
 */
export interface UpdatedUser {
    /** The user's email address. Required if subscribeToEmails is true. */
    email?: string;
    /** The name to refer to the user by in emails. */
    name?: string;
    /** The user's timezone (used for email scheduling). */
    tz?: string;
    /** The date the user signed up on your platform, in ISO 8601 format. Must not be in the future. Required for anniversary achievements. Users without a signUpDate are not eligible. */
    signUpDate?: Date;
    /** The user's device tokens, used for push notifications. */
    deviceTokens?: string[];
    /** Whether the user should receive Trophy-powered emails. If false, Trophy will not store the user's email address. */
    subscribeToEmails?: boolean;
    /** User attributes as key-value pairs. Keys must match existing user attributes set up in the Trophy dashboard. */
    attributes?: Record<string, string>;
}
