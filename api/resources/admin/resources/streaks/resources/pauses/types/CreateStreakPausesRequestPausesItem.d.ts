export interface CreateStreakPausesRequestPausesItem {
    /** The ID of the user to create a pause for. */
    userId: string;
    /** The first date the pause covers, in YYYY-MM-DD format. */
    start: string;
    /** The last date the pause covers, in YYYY-MM-DD format. Must be on or after start. */
    end: string;
}
