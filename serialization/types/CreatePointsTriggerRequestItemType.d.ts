import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePointsTriggerRequestItemType: core.serialization.Schema<serializers.CreatePointsTriggerRequestItemType.Raw, TrophyApi.CreatePointsTriggerRequestItemType>;
export declare namespace CreatePointsTriggerRequestItemType {
    type Raw = "metric" | "achievement" | "streak" | "time" | "user_creation";
}
