import type * as TrophyApi from "../index";
export interface RedeemRewardResponse {
    reward: TrophyApi.RewardSummary;
    /** The awards redeemed by this request, oldest first. */
    redemptions: TrophyApi.RedeemedReward[];
    /** Points granted by a points reward, keyed by points system key. Includes one award per redemption. */
    points?: Record<string, TrophyApi.MetricEventPointsResponse>;
    /** A map of leaderboards by key. Only contains leaderboards that were affected by the points this request granted. */
    leaderboards: Record<string, TrophyApi.MetricEventLeaderboardResponse>;
}
