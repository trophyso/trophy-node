import type * as TrophyApi from "../../../index";
export interface LeaderboardsAllResponseItem extends TrophyApi.LeaderboardResponse {
    /** The status of the leaderboard. */
    status: TrophyApi.LeaderboardsAllResponseItemStatus;
}
