/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const AchievementCompletionResponse: core.serialization.ObjectSchema<serializers.AchievementCompletionResponse.Raw, TrophyApi.AchievementCompletionResponse>;
export declare namespace AchievementCompletionResponse {
    interface Raw {
        completionId: string;
        achievement: serializers.AchievementResponse.Raw;
    }
}
