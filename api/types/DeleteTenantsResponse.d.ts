import type * as TrophyApi from "../index";
/**
 * Response containing deleted tenant IDs and any issues.
 */
export interface DeleteTenantsResponse {
    /** Array of deleted tenant IDs. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during deletion. */
    issues: TrophyApi.AdminIssue[];
}
