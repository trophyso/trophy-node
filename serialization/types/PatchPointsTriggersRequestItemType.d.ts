import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchPointsTriggersRequestItemType: core.serialization.Schema<serializers.PatchPointsTriggersRequestItemType.Raw, TrophyApi.PatchPointsTriggersRequestItemType>;
export declare namespace PatchPointsTriggersRequestItemType {
    type Raw = "metric" | "achievement" | "streak" | "time" | "user_creation";
}
