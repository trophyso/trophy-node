import type * as TrophyApi from "../index";
/**
 * A user's data for a specific leaderboard including rank, value, and history.
 */
export interface UserLeaderboardResponseWithHistory extends TrophyApi.UserLeaderboardResponse {
    /** An array of daily change events showing the user's rank and value over time. */
    history: TrophyApi.LeaderboardEvent[];
}
