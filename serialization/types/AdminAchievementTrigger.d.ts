import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminAchievementTrigger: core.serialization.Schema<serializers.AdminAchievementTrigger.Raw, TrophyApi.AdminAchievementTrigger>;
export declare namespace AdminAchievementTrigger {
    type Raw = "metric" | "streak" | "api" | "achievement" | "anniversary";
}
