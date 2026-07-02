import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PatchPointsTriggersRequestItemStatus: core.serialization.Schema<serializers.PatchPointsTriggersRequestItemStatus.Raw, TrophyApi.PatchPointsTriggersRequestItemStatus>;
export declare namespace PatchPointsTriggersRequestItemStatus {
    type Raw = "active" | "inactive";
}
