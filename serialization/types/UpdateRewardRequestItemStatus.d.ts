import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateRewardRequestItemStatus: core.serialization.Schema<serializers.UpdateRewardRequestItemStatus.Raw, TrophyApi.UpdateRewardRequestItemStatus>;
export declare namespace UpdateRewardRequestItemStatus {
    type Raw = "active" | "inactive";
}
