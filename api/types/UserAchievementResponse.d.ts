import type * as TrophyApi from "../index";
export interface UserAchievementResponse extends TrophyApi.AchievementResponse {
    /** The date and time the achievement was completed, in ISO 8601 format. Null if the achievement has not been completed. */
    achievedAt?: Date;
}
