/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const MetricResponse: core.serialization.ObjectSchema<serializers.MetricResponse.Raw, TrophyApi.MetricResponse>;
export declare namespace MetricResponse {
    interface Raw {
        id: string;
        key: string;
        name: string;
        emoji: string;
        streakFrequency: serializers.StreakFrequency.Raw;
        status: serializers.MetricStatus.Raw;
        current: number;
        achievements: serializers.MultiStageAchievementResponse.Raw[];
        currentStreak?: serializers.StreakResponse.Raw | null;
    }
}
