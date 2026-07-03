import type * as TrophyApi from "../index";
/**
 * Response containing created levels and any per-item issues.
 */
export interface CreatePointsLevelsResponse {
    /** Array of successfully created levels. */
    created: TrophyApi.AdminPointsLevel[];
    /** Array of issues encountered during level creation. */
    issues: TrophyApi.AdminIssue[];
}
