/**
 * A daily leaderboard snapshot entry representing the user's rank/value state and the previous persisted state.
 */
export interface LeaderboardEvent {
    /** The leaderboard snapshot date in YYYY-MM-DD format. */
    date: string;
    /** Deprecated ISO timestamp for the snapshot day boundary. Use `date` instead. */
    timestamp: Date;
    /** The user's rank before this event, or null if they were not on the leaderboard. */
    previousRank?: number;
    /** The user's rank after this event, or null if they are no longer on the leaderboard. */
    rank?: number;
    /** The user's value before this event, or null if they were not on the leaderboard. */
    previousValue?: number;
    /** The user's value after this event, or null if they are no longer on the leaderboard. */
    value?: number;
}
