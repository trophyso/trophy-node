import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchPointsBoostsRequestItemRounding: core.serialization.Schema<serializers.PatchPointsBoostsRequestItemRounding.Raw, TrophyApi.PatchPointsBoostsRequestItemRounding>;
export declare namespace PatchPointsBoostsRequestItemRounding {
    type Raw = "down" | "up" | "nearest";
}
