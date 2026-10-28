import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminRewardType: core.serialization.Schema<serializers.AdminRewardType.Raw, TrophyApi.AdminRewardType>;
export declare namespace AdminRewardType {
    type Raw = "points" | "custom";
}
