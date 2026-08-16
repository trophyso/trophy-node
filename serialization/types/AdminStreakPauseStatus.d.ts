import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminStreakPauseStatus: core.serialization.Schema<serializers.AdminStreakPauseStatus.Raw, TrophyApi.AdminStreakPauseStatus>;
export declare namespace AdminStreakPauseStatus {
    type Raw = "active" | "archived";
}
