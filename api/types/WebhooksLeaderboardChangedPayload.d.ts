import type * as TrophyApi from "../index";
export interface WebhooksLeaderboardChangedPayload {
    /** The webhook event type. */
    type: "leaderboard.changed";
    /** The leaderboard run that changed. */
    leaderboard: TrophyApi.LeaderboardResponseWithRankings;
}
