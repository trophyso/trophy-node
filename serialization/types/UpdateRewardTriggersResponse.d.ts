import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminRewardTrigger } from "./AdminRewardTrigger";
export declare const UpdateRewardTriggersResponse: core.serialization.ObjectSchema<serializers.UpdateRewardTriggersResponse.Raw, TrophyApi.UpdateRewardTriggersResponse>;
export declare namespace UpdateRewardTriggersResponse {
    interface Raw {
        updated: AdminRewardTrigger.Raw[];
        issues: AdminIssue.Raw[];
    }
}
