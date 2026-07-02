/**
 * @example
 *     {
 *         includeFinished: true
 *     }
 */
export interface LeaderboardsAllRequest {
    /** When set to 'true', leaderboards with status 'finished' will be included in the response. By default, finished leaderboards are excluded. */
    includeFinished?: boolean;
}
