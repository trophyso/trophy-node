/**
 * @example
 *     {
 *         ids: ["550e8400-e29b-41d4-a716-446655440000"]
 *     }
 */
export interface TriggersDeleteRequest {
    /** Trigger IDs to delete. Can be repeated or comma-separated. */
    ids?: string | string[];
}
