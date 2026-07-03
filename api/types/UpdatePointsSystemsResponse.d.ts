import type * as TrophyApi from "../index";
/**
 * Response containing updated points systems and any per-item issues.
 */
export interface UpdatePointsSystemsResponse {
    /** Array of successfully updated points systems. */
    updated: TrophyApi.AdminPointsSystem[];
    /** Array of issues encountered during update. */
    issues: TrophyApi.AdminIssue[];
}
