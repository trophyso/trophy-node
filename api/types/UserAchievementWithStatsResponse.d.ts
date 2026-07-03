import type * as TrophyApi from "../index";
export interface UserAchievementWithStatsResponse extends TrophyApi.AchievementWithStatsResponse {
    /** The date and time the achievement was completed, in ISO 8601 format. Null if the achievement has not been completed. */
    achievedAt?: Date;
}
