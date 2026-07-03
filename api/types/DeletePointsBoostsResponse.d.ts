import type * as TrophyApi from "../index";
/**
 * Response containing the points boosts that were deleted and any per-item issues.
 */
export interface DeletePointsBoostsResponse {
    /** Array of deleted points boosts represented by ID. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during boost deletion. */
    issues: TrophyApi.AdminIssue[];
}
