import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsBoostStatus: core.serialization.Schema<serializers.PointsBoostStatus.Raw, TrophyApi.PointsBoostStatus>;
export declare namespace PointsBoostStatus {
    type Raw = "active" | "scheduled" | "finished";
}
