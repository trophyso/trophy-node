/**
 * @example
 *     {
 *         historyPeriods: 1
 *     }
 */
export interface UsersStreakRequest {
    /** The number of past streak periods to include in the streakHistory field of the  response. */
    historyPeriods?: number;
}
