import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateTenantRequestItem: core.serialization.ObjectSchema<serializers.CreateTenantRequestItem.Raw, TrophyApi.CreateTenantRequestItem>;
export declare namespace CreateTenantRequestItem {
    interface Raw {
        customerId: string;
        name: string;
    }
}
