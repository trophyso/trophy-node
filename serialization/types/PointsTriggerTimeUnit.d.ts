import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsTriggerTimeUnit: core.serialization.Schema<serializers.PointsTriggerTimeUnit.Raw, TrophyApi.PointsTriggerTimeUnit>;
export declare namespace PointsTriggerTimeUnit {
    type Raw = "hour" | "day";
}
