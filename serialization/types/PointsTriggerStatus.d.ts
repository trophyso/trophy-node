import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsTriggerStatus: core.serialization.Schema<serializers.PointsTriggerStatus.Raw, TrophyApi.PointsTriggerStatus>;
export declare namespace PointsTriggerStatus {
    type Raw = "active" | "inactive" | "archived";
}
