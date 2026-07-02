import type * as TrophyApi from "../index";
/**
 * Response containing created leaderboards and any per-item issues.
 */
export interface CreateLeaderboardsResponse {
    /** Array of successfully created leaderboards. */
    created: TrophyApi.AdminLeaderboard[];
    /** Array of issues encountered during leaderboard creation. */
    issues: TrophyApi.AdminIssue[];
}
