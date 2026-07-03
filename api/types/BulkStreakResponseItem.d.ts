export interface BulkStreakResponseItem {
    /** The ID of the user. */
    userId: string;
    /** The length of the user's streak. */
    streakLength: number;
    /** The timestamp the streak was extended, as a string. Null if the streak is not active. */
    extended?: string;
}
