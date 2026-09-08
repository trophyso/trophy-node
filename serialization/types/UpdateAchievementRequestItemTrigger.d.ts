import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAchievementRequestItemTrigger: core.serialization.Schema<serializers.UpdateAchievementRequestItemTrigger.Raw, TrophyApi.UpdateAchievementRequestItemTrigger>;
export declare namespace UpdateAchievementRequestItemTrigger {
    type Raw = "metric" | "streak" | "api" | "achievement" | "anniversary";
}
