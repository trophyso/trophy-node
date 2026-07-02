import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminTenant } from "./AdminTenant";
export declare const ListTenantsResponse: core.serialization.Schema<serializers.ListTenantsResponse.Raw, TrophyApi.ListTenantsResponse>;
export declare namespace ListTenantsResponse {
    type Raw = AdminTenant.Raw[];
}
