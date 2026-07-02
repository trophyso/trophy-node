import type * as TrophyApi from "../index";
export interface AchievementWithStatsResponse extends TrophyApi.AchievementResponse {
    /** The number of users who have completed this achievement. */
    completions: number;
    /** The percentage of all users who have completed this achievement. */
    rarity: number;
}
