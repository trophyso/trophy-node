import type * as TrophyApi from "../index";
/**
 * Response containing created achievements and any per-item issues.
 */
export interface CreateAchievementsResponse {
    /** Array of successfully created achievements. */
    created: TrophyApi.AdminAchievement[];
    /** Array of issues encountered during achievement creation. */
    issues: TrophyApi.AdminIssue[];
}
