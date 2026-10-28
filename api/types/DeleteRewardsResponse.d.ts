import type * as TrophyApi from "../index";
/**
 * Response containing deleted reward IDs and any per-item issues.
 */
export interface DeleteRewardsResponse {
    /** Array of deleted reward IDs. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during deletion. */
    issues: TrophyApi.AdminIssue[];
}
