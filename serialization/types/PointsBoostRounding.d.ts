import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsBoostRounding: core.serialization.Schema<serializers.PointsBoostRounding.Raw, TrophyApi.PointsBoostRounding>;
export declare namespace PointsBoostRounding {
    type Raw = "down" | "up" | "nearest";
}
