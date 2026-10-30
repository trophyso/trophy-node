import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { CreatedAdminReward } from "./CreatedAdminReward";
export declare const CreateRewardsResponse: core.serialization.ObjectSchema<serializers.CreateRewardsResponse.Raw, TrophyApi.CreateRewardsResponse>;
export declare namespace CreateRewardsResponse {
    interface Raw {
        created: CreatedAdminReward.Raw[];
        issues: AdminIssue.Raw[];
    }
}
