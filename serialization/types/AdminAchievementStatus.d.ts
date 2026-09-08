import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminAchievementStatus: core.serialization.Schema<serializers.AdminAchievementStatus.Raw, TrophyApi.AdminAchievementStatus>;
export declare namespace AdminAchievementStatus {
    type Raw = "active" | "inactive" | "locked";
}
