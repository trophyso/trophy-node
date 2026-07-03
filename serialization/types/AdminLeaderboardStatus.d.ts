import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminLeaderboardStatus: core.serialization.Schema<serializers.AdminLeaderboardStatus.Raw, TrophyApi.AdminLeaderboardStatus>;
export declare namespace AdminLeaderboardStatus {
    type Raw = "inactive" | "active" | "scheduled" | "finished";
}
