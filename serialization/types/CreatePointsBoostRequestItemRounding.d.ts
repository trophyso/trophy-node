import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatePointsBoostRequestItemRounding: core.serialization.Schema<serializers.CreatePointsBoostRequestItemRounding.Raw, TrophyApi.CreatePointsBoostRequestItemRounding>;
export declare namespace CreatePointsBoostRequestItemRounding {
    type Raw = "down" | "up" | "nearest";
}
