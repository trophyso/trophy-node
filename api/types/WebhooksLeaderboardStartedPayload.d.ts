import type * as TrophyApi from "../index";
export interface WebhooksLeaderboardStartedPayload {
    /** The webhook event type. */
    type: "leaderboard.started";
    /** The leaderboard run that started and its initial rankings. */
    leaderboard: TrophyApi.LeaderboardResponseWithRankings;
}
