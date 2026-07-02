import type * as TrophyApi from "../index";
/**
 * Response containing the points triggers that were deleted and any per-item issues.
 */
export interface DeletePointsTriggersResponse {
    /** Array of deleted points triggers represented by ID. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during trigger deletion. */
    issues: TrophyApi.AdminIssue[];
}
