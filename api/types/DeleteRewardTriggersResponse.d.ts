import type * as TrophyApi from "../index";
/**
 * Response containing the reward triggers that were deleted and any per-item issues.
 */
export interface DeleteRewardTriggersResponse {
    /** Array of deleted reward triggers represented by ID. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during trigger deletion. */
    issues: TrophyApi.AdminIssue[];
}
