import type * as TrophyApi from "../index";
/**
 * Response containing deleted achievements represented by ID and any per-item issues, including invalid or missing achievement IDs.
 */
export interface DeleteAchievementsResponse {
    /** Array of deleted achievements represented by ID. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during achievement deletion. */
    issues: TrophyApi.AdminIssue[];
}
