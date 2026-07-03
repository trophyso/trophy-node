import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminPointsSystem } from "./AdminPointsSystem";
export declare const UpdatePointsSystemsResponse: core.serialization.ObjectSchema<serializers.UpdatePointsSystemsResponse.Raw, TrophyApi.UpdatePointsSystemsResponse>;
export declare namespace UpdatePointsSystemsResponse {
    interface Raw {
        updated: AdminPointsSystem.Raw[];
        issues: AdminIssue.Raw[];
    }
}
