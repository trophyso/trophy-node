/**
 * @example
 *     {
 *         includeFinished: true
 *     }
 */
export interface PointsBoostsRequest {
    /** When set to 'true', boosts that have finished (past their end date) will be included in the response. By default, finished boosts are excluded. */
    includeFinished?: boolean;
}
