import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminReward } from "./AdminReward";
export declare const UpdateRewardsResponse: core.serialization.ObjectSchema<serializers.UpdateRewardsResponse.Raw, TrophyApi.UpdateRewardsResponse>;
export declare namespace UpdateRewardsResponse {
    interface Raw {
        updated: AdminReward.Raw[];
        issues: AdminIssue.Raw[];
    }
}
