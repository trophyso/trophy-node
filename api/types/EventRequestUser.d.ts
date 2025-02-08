/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * The user that triggered the event.
 */
export interface EventRequestUser {
    /** The ID of the user in your database. Must be a string. */
    id: string;
    /** The user's email address. */
    email?: string;
    /** The name to refer to the user by in emails. */
    name?: string;
    /** The user's timezone (used for email scheduling). */
    tz?: string;
}
