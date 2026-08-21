/**
 * @example
 *     {
 *         ids: ["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001"]
 *     }
 */
export interface PausesDeleteRequest {
    /** Streak pause IDs to archive. Repeat the query param or provide a comma-separated list. */
    ids?: string | string[];
}
