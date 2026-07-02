import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePointsTriggerRequestItemStatus: core.serialization.Schema<serializers.CreatePointsTriggerRequestItemStatus.Raw, TrophyApi.CreatePointsTriggerRequestItemStatus>;
export declare namespace CreatePointsTriggerRequestItemStatus {
    type Raw = "active" | "inactive";
}
