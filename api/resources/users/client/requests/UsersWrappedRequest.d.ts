/**
 * @example
 *     {
 *         year: 1
 *     }
 */
export interface UsersWrappedRequest {
    /** The year to get wrapped data for. Defaults to the current year. Must be an integer between 1 and the current year. */
    year?: number;
}
