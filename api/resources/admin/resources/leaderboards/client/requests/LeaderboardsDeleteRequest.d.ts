/**
 * @example
 *     {
 *         ids: ["ids"]
 *     }
 */
export interface LeaderboardsDeleteRequest {
    /** Leaderboard IDs to delete. Repeat the query param or provide a comma-separated list. */
    ids?: string | string[];
}
