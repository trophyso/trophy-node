import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminTenantStatus } from "./AdminTenantStatus";
export declare const AdminTenant: core.serialization.ObjectSchema<serializers.AdminTenant.Raw, TrophyApi.AdminTenant>;
export declare namespace AdminTenant {
    interface Raw {
        id: string;
        customerId: string;
        name: string;
        status: AdminTenantStatus.Raw;
        created: string;
        updated: string;
    }
}
