import type * as TrophyApi from "../index";
/**
 * Response containing the points levels that were deleted and any per-item issues.
 */
export interface DeletePointsLevelsResponse {
    /** Array of deleted points levels represented by ID. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during level deletion. */
    issues: TrophyApi.AdminIssue[];
}
