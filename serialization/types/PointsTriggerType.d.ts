import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsTriggerType: core.serialization.Schema<serializers.PointsTriggerType.Raw, TrophyApi.PointsTriggerType>;
export declare namespace PointsTriggerType {
    type Raw = "metric" | "achievement" | "streak" | "time" | "user_creation";
}
