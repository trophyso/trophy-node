/**
 * A tenant to create.
 */
export interface CreateTenantRequestItem {
    /** The external customer ID. Must be unique within the environment. */
    customerId: string;
    /** Human-readable name for the tenant. */
    name: string;
}
