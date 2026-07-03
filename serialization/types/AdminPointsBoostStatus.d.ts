import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsBoostStatus: core.serialization.Schema<serializers.AdminPointsBoostStatus.Raw, TrophyApi.AdminPointsBoostStatus>;
export declare namespace AdminPointsBoostStatus {
    type Raw = "active" | "scheduled" | "finished";
}
