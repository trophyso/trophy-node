import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateMetricRequestItemUnitType: core.serialization.Schema<serializers.CreateMetricRequestItemUnitType.Raw, TrophyApi.CreateMetricRequestItemUnitType>;
export declare namespace CreateMetricRequestItemUnitType {
    type Raw = "number" | "currency";
}
