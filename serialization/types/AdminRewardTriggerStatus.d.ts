import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminRewardTriggerStatus: core.serialization.Schema<serializers.AdminRewardTriggerStatus.Raw, TrophyApi.AdminRewardTriggerStatus>;
export declare namespace AdminRewardTriggerStatus {
    type Raw = "active" | "inactive";
}
