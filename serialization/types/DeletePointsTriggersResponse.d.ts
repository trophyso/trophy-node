import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeletePointsTriggersResponse: core.serialization.ObjectSchema<serializers.DeletePointsTriggersResponse.Raw, TrophyApi.DeletePointsTriggersResponse>;
export declare namespace DeletePointsTriggersResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
