/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const AchievementResponseTrigger: core.serialization.Schema<serializers.AchievementResponseTrigger.Raw, TrophyApi.AchievementResponseTrigger>;
export declare namespace AchievementResponseTrigger {
    type Raw = "metric" | "streak" | "api";
}
