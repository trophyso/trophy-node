import type * as TrophyApi from "../index";
/**
 * Response containing updated tenants and any issues.
 */
export interface UpdateTenantsResponse {
    /** Array of successfully updated tenants. */
    updated: TrophyApi.AdminTenant[];
    /** Array of issues encountered during update. */
    issues: TrophyApi.AdminIssue[];
}
