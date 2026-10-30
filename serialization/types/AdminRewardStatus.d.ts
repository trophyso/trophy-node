import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminRewardStatus: core.serialization.Schema<serializers.AdminRewardStatus.Raw, TrophyApi.AdminRewardStatus>;
export declare namespace AdminRewardStatus {
    type Raw = "active" | "inactive";
}
