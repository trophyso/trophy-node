import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminPointsBoost } from "./AdminPointsBoost";
export declare const CreatePointsBoostsResponse: core.serialization.ObjectSchema<serializers.CreatePointsBoostsResponse.Raw, TrophyApi.CreatePointsBoostsResponse>;
export declare namespace CreatePointsBoostsResponse {
    interface Raw {
        created: AdminPointsBoost.Raw[];
        issues: AdminIssue.Raw[];
    }
}
