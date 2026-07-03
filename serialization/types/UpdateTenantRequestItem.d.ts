import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateTenantRequestItem: core.serialization.ObjectSchema<serializers.UpdateTenantRequestItem.Raw, TrophyApi.UpdateTenantRequestItem>;
export declare namespace UpdateTenantRequestItem {
    interface Raw {
        id: string;
        customerId?: string | null;
        name?: string | null;
    }
}
