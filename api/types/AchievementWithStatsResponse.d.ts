/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as TrophyApi from "..";
export interface AchievementWithStatsResponse extends TrophyApi.AchievementResponse {
    /** The number of users who have completed this achievement. */
    completions?: number;
    /** The percentage of all users who have completed this achievement. */
    completedPercentage?: number;
}
