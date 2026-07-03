import type * as TrophyApi from "../index";
/**
 * Response containing updated leaderboards and any per-item issues identified by leaderboard ID.
 */
export interface UpdateLeaderboardsResponse {
    /** Array of successfully updated leaderboards. */
    updated: TrophyApi.AdminLeaderboard[];
    /** Array of issues encountered during leaderboard update. */
    issues: TrophyApi.AdminIssue[];
}
