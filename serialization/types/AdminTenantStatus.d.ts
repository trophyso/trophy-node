import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminTenantStatus: core.serialization.Schema<serializers.AdminTenantStatus.Raw, TrophyApi.AdminTenantStatus>;
export declare namespace AdminTenantStatus {
    type Raw = "active" | "archived";
}
