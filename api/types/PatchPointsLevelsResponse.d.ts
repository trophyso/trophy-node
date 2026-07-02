import type * as TrophyApi from "../index";
/**
 * Response containing updated levels and any issues encountered.
 */
export interface PatchPointsLevelsResponse {
    /** Array of successfully updated levels. */
    updated: TrophyApi.AdminPointsLevel[];
    /** Array of issues encountered during level updates. */
    issues: TrophyApi.AdminIssue[];
}
