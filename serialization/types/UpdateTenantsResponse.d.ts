import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminTenant } from "./AdminTenant";
export declare const UpdateTenantsResponse: core.serialization.ObjectSchema<serializers.UpdateTenantsResponse.Raw, TrophyApi.UpdateTenantsResponse>;
export declare namespace UpdateTenantsResponse {
    interface Raw {
        updated: AdminTenant.Raw[];
        issues: AdminIssue.Raw[];
    }
}
