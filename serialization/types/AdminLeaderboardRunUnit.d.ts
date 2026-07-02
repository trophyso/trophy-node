import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminLeaderboardRunUnit: core.serialization.Schema<serializers.AdminLeaderboardRunUnit.Raw, TrophyApi.AdminLeaderboardRunUnit>;
export declare namespace AdminLeaderboardRunUnit {
    type Raw = "day" | "month" | "year";
}
