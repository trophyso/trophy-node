/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as TrophyApi from "..";
export interface AchievementCompletionResponse {
    /** The unique ID of the completion. */
    completionId: string;
    achievement: TrophyApi.OneOffAchievementResponse;
}
