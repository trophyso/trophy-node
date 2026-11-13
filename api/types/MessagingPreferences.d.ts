import type * as TrophyApi from "../index";
/**
 * The user's agentic messaging preferences: the channels its messages may use, and how many and what kinds of messages they want.
 */
export interface MessagingPreferences {
    /** Channels agentic messages may use. An empty array turns agentic messages off for this user. */
    channels?: TrophyApi.NotificationChannel[];
    /** How many and what kinds of agentic messages the user wants, from 1 (fewer: progress and celebrations only, at most one email and one push a week) to 5 (more). */
    temperature?: number;
}
