import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateTenantRequestItem } from "./CreateTenantRequestItem";
export declare const CreateTenantsRequest: core.serialization.Schema<serializers.CreateTenantsRequest.Raw, TrophyApi.CreateTenantsRequest>;
export declare namespace CreateTenantsRequest {
    type Raw = CreateTenantRequestItem.Raw[];
}
