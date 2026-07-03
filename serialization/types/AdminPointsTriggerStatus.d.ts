import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsTriggerStatus: core.serialization.Schema<serializers.AdminPointsTriggerStatus.Raw, TrophyApi.AdminPointsTriggerStatus>;
export declare namespace AdminPointsTriggerStatus {
    type Raw = "active" | "inactive";
}
