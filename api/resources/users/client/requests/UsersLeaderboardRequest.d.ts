/**
 * @example
 *     {
 *         run: "2025-01-15",
 *         numEvents: 1
 *     }
 */
export interface UsersLeaderboardRequest {
    /** Specific run date in YYYY-MM-DD format. If not provided, returns the current run. */
    run?: string;
    /** The number of days to return in the leaderboard history for the user. */
    numEvents?: number;
}
