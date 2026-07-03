import type * as TrophyApi from "../index";
export interface LeaderboardResponseWithRankings extends TrophyApi.LeaderboardResponse {
    /** The status of the leaderboard. */
    status: TrophyApi.LeaderboardResponseWithRankingsStatus;
    /** Array of user rankings for the leaderboard. */
    rankings: TrophyApi.LeaderboardRanking[];
}
