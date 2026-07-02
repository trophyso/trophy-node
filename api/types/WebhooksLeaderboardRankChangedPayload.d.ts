import type * as TrophyApi from "../index";
export interface WebhooksLeaderboardRankChangedPayload {
    /** The webhook event type. */
    type: "leaderboard.rank_changed";
    /** The user whose rank changed. */
    user: TrophyApi.User;
    /** The user's leaderboard data that changed. */
    leaderboard: TrophyApi.WebhookUserLeaderboardResponse;
}
