import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateRewardTriggersRequestItemStatus: core.serialization.Schema<serializers.UpdateRewardTriggersRequestItemStatus.Raw, TrophyApi.UpdateRewardTriggersRequestItemStatus>;
export declare namespace UpdateRewardTriggersRequestItemStatus {
    type Raw = "active" | "inactive";
}
