import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminPointsBoost } from "./AdminPointsBoost";
export declare const PatchPointsBoostsResponse: core.serialization.ObjectSchema<serializers.PatchPointsBoostsResponse.Raw, TrophyApi.PatchPointsBoostsResponse>;
export declare namespace PatchPointsBoostsResponse {
    interface Raw {
        updated: AdminPointsBoost.Raw[];
        issues: AdminIssue.Raw[];
    }
}
