import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { DeletedResource } from "./DeletedResource";
export declare const DeleteRewardsResponse: core.serialization.ObjectSchema<serializers.DeleteRewardsResponse.Raw, TrophyApi.DeleteRewardsResponse>;
export declare namespace DeleteRewardsResponse {
    interface Raw {
        deleted: DeletedResource.Raw[];
        issues: AdminIssue.Raw[];
    }
}
