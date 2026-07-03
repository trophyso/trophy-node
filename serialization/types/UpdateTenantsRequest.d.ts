import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateTenantRequestItem } from "./UpdateTenantRequestItem";
export declare const UpdateTenantsRequest: core.serialization.Schema<serializers.UpdateTenantsRequest.Raw, TrophyApi.UpdateTenantsRequest>;
export declare namespace UpdateTenantsRequest {
    type Raw = UpdateTenantRequestItem.Raw[];
}
