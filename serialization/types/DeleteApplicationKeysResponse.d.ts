import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeleteApplicationKeysResponse: core.serialization.ObjectSchema<serializers.DeleteApplicationKeysResponse.Raw, TrophyApi.DeleteApplicationKeysResponse>;
export declare namespace DeleteApplicationKeysResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
