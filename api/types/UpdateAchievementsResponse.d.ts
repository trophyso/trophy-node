import type * as TrophyApi from "../index";
/**
 * Response containing updated achievements and any per-item issues identified by achievement ID.
 */
export interface UpdateAchievementsResponse {
    /** Array of successfully updated achievements. */
    updated: TrophyApi.AdminAchievement[];
    /** Array of issues encountered during achievement update. */
    issues: TrophyApi.AdminIssue[];
}
