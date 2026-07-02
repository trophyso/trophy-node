import type * as TrophyApi from "../index";
/**
 * A tenant in a multi-tenant environment.
 */
export interface AdminTenant {
    /** The tenant UUID. */
    id: string;
    /** The external customer ID for this tenant. */
    customerId: string;
    /** Human-readable name for the tenant. */
    name: string;
    /** The lifecycle status of the tenant. */
    status: TrophyApi.AdminTenantStatus;
    /** When the tenant was created. */
    created: Date;
    /** When the tenant was last updated. */
    updated: Date;
}
