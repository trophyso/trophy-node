import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminTenant } from "./AdminTenant";
export declare const CreateTenantsResponse: core.serialization.ObjectSchema<serializers.CreateTenantsResponse.Raw, TrophyApi.CreateTenantsResponse>;
export declare namespace CreateTenantsResponse {
    interface Raw {
        created: AdminTenant.Raw[];
        issues: AdminIssue.Raw[];
    }
}
