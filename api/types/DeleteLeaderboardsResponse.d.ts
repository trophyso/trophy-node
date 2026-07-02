import type * as TrophyApi from "../index";
/**
 * Response containing deleted leaderboards represented by ID and any per-item issues.
 */
export interface DeleteLeaderboardsResponse {
    /** Array of deleted leaderboards represented by ID. */
    deleted: TrophyApi.DeletedResource[];
    /** Array of issues encountered during leaderboard deletion. */
    issues: TrophyApi.AdminIssue[];
}
