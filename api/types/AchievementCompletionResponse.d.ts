import type * as TrophyApi from "../index";
export interface AchievementCompletionResponse {
    /** The unique ID of the completion. */
    completionId: string;
    achievement: TrophyApi.UserAchievementResponse;
    /** A map of points systems by key that were affected by this achievement completion. */
    points: Record<string, TrophyApi.MetricEventPointsResponse>;
}
