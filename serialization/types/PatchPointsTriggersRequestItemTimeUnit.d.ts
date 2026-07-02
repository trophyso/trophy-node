import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchPointsTriggersRequestItemTimeUnit: core.serialization.Schema<serializers.PatchPointsTriggersRequestItemTimeUnit.Raw, TrophyApi.PatchPointsTriggersRequestItemTimeUnit>;
export declare namespace PatchPointsTriggersRequestItemTimeUnit {
    type Raw = "hours" | "days";
}
