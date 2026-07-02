/**
 * A tenant to update.
 */
export interface UpdateTenantRequestItem {
    /** The UUID of the tenant to update. */
    id: string;
    /** New external customer ID. */
    customerId?: string;
    /** New display name for the tenant. */
    name?: string;
}
