import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateMetricRequestItemUnitType: core.serialization.Schema<serializers.UpdateMetricRequestItemUnitType.Raw, TrophyApi.UpdateMetricRequestItemUnitType>;
export declare namespace UpdateMetricRequestItemUnitType {
    type Raw = "number" | "currency";
}
