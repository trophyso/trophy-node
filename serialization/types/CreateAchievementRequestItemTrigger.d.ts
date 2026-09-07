import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAchievementRequestItemTrigger: core.serialization.Schema<serializers.CreateAchievementRequestItemTrigger.Raw, TrophyApi.CreateAchievementRequestItemTrigger>;
export declare namespace CreateAchievementRequestItemTrigger {
    type Raw = "metric" | "streak" | "api" | "achievement" | "anniversary";
}
