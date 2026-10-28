import type * as TrophyApi from "../index";
export interface AchievementCompletionResponse {
    /** The unique ID of the completion. */
    completionId: string;
    achievement: TrophyApi.UserAchievementResponse;
    /** A map of points systems by key that were affected by this achievement completion. */
    points: Record<string, TrophyApi.MetricEventPointsResponse>;
    /** A map of leaderboards by key. Only contains leaderboards that were affected by this achievement completion. */
    leaderboards: Record<string, TrophyApi.MetricEventLeaderboardResponse>;
    /** Rewards awarded as a result of this achievement completion. */
    rewards: TrophyApi.UserRewardResponse[];
}
