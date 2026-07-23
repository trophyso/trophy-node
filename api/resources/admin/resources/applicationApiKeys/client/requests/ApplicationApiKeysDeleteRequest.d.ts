/**
 * @example
 *     {
 *         ids: ["550e8400-e29b-41d4-a716-446655440000"]
 *     }
 */
export interface ApplicationApiKeysDeleteRequest {
    /** Application API key IDs (UUIDs returned at creation time). Repeat the query param or provide a comma-separated list. Maximum 100 IDs per request. */
    ids?: string | string[];
}
