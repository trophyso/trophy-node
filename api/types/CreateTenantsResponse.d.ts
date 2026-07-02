import type * as TrophyApi from "../index";
/**
 * Response containing created tenants and any issues.
 */
export interface CreateTenantsResponse {
    /** Array of successfully created tenants. */
    created: TrophyApi.AdminTenant[];
    /** Array of issues encountered during creation. */
    issues: TrophyApi.AdminIssue[];
}
