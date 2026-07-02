import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsBoostRounding: core.serialization.Schema<serializers.AdminPointsBoostRounding.Raw, TrophyApi.AdminPointsBoostRounding>;
export declare namespace AdminPointsBoostRounding {
    type Raw = "down" | "up" | "nearest";
}
