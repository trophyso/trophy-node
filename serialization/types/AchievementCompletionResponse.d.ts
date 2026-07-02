import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { MetricEventPointsResponse } from "./MetricEventPointsResponse";
import { UserAchievementResponse } from "./UserAchievementResponse";
export declare const AchievementCompletionResponse: core.serialization.ObjectSchema<serializers.AchievementCompletionResponse.Raw, TrophyApi.AchievementCompletionResponse>;
export declare namespace AchievementCompletionResponse {
    interface Raw {
        completionId: string;
        achievement: UserAchievementResponse.Raw;
        points: Record<string, MetricEventPointsResponse.Raw>;
    }
}
