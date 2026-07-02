import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsTriggerType: core.serialization.Schema<serializers.AdminPointsTriggerType.Raw, TrophyApi.AdminPointsTriggerType>;
export declare namespace AdminPointsTriggerType {
    type Raw = "metric" | "achievement" | "streak" | "time" | "user_creation";
}
