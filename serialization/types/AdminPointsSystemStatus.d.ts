import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminPointsSystemStatus: core.serialization.Schema<serializers.AdminPointsSystemStatus.Raw, TrophyApi.AdminPointsSystemStatus>;
export declare namespace AdminPointsSystemStatus {
    type Raw = "active" | "archived";
}
