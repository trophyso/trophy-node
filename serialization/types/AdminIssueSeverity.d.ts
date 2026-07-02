import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminIssueSeverity: core.serialization.Schema<serializers.AdminIssueSeverity.Raw, TrophyApi.AdminIssueSeverity>;
export declare namespace AdminIssueSeverity {
    type Raw = "error" | "warning";
}
