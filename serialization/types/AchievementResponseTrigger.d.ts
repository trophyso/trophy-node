import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AchievementResponseTrigger: core.serialization.Schema<serializers.AchievementResponseTrigger.Raw, TrophyApi.AchievementResponseTrigger>;
export declare namespace AchievementResponseTrigger {
    type Raw = "metric" | "streak" | "api" | "achievement";
}
