import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateRewardRequestItemType: core.serialization.Schema<serializers.UpdateRewardRequestItemType.Raw, TrophyApi.UpdateRewardRequestItemType>;
export declare namespace UpdateRewardRequestItemType {
    type Raw = "points" | "custom";
}
