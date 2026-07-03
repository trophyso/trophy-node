import type * as TrophyApi from "../index";
/**
 * Response containing deleted points system IDs and any per-item issues.
 */
export interface DeletePointsSystemsResponse {
    /** Array of deleted points system IDs. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during deletion. */
    issues: TrophyApi.AdminIssue[];
}
