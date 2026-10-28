import type * as TrophyApi from "../index";
export interface UserRewardTrigger {
    id: string;
    type: TrophyApi.UserRewardTriggerType;
    metricId?: string;
    threshold?: number;
    achievementId?: string;
    streakLength?: number;
    leaderboardId?: string;
    rank?: number;
}
