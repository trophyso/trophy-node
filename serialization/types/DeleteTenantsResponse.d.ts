import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeleteTenantsResponse: core.serialization.ObjectSchema<serializers.DeleteTenantsResponse.Raw, TrophyApi.DeleteTenantsResponse>;
export declare namespace DeleteTenantsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
