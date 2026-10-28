/**
 * @example
 *     {
 *         ids: ["880b1700-b52e-44a7-d049-779988770003"]
 *     }
 */
export interface TriggersDeleteRequest {
    /** Trigger IDs to delete. Can be repeated or comma-separated. */
    ids?: string | string[];
}
