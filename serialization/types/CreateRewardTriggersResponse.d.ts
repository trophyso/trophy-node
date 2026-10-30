import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminRewardTrigger } from "./AdminRewardTrigger";
export declare const CreateRewardTriggersResponse: core.serialization.ObjectSchema<serializers.CreateRewardTriggersResponse.Raw, TrophyApi.CreateRewardTriggersResponse>;
export declare namespace CreateRewardTriggersResponse {
    interface Raw {
        created: AdminRewardTrigger.Raw[];
        issues: AdminIssue.Raw[];
    }
}
