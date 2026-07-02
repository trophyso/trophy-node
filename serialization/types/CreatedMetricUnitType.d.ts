import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatedMetricUnitType: core.serialization.Schema<serializers.CreatedMetricUnitType.Raw, TrophyApi.CreatedMetricUnitType>;
export declare namespace CreatedMetricUnitType {
    type Raw = "number" | "currency";
}
