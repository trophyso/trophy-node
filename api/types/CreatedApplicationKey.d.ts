/**
 * A newly created application API key.
 */
export interface CreatedApplicationKey {
    /** The unique identifier of the API key. Use this ID to delete the key. */
    id: string;
    /** The user ID the key is scoped to. */
    userId: string;
    /** The full API key value. This is only returned once at creation time and cannot be retrieved again. */
    key: string;
    /** The key prefix used for cache lookup. */
    prefix: string;
}
