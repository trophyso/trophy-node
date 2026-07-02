import type * as TrophyApi from "../index";
/**
 * Response containing deleted metrics represented by ID and any per-item issues, including invalid or missing metric IDs.
 */
export interface DeleteMetricsResponse {
    /** Array of deleted metrics represented by ID. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during metric deletion. */
    issues: TrophyApi.AdminIssue[];
}
