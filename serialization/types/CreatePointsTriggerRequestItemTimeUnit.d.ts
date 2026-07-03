import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePointsTriggerRequestItemTimeUnit: core.serialization.Schema<serializers.CreatePointsTriggerRequestItemTimeUnit.Raw, TrophyApi.CreatePointsTriggerRequestItemTimeUnit>;
export declare namespace CreatePointsTriggerRequestItemTimeUnit {
    type Raw = "hours" | "days";
}
