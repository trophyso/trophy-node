import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminPointsLevel } from "./AdminPointsLevel";
export declare const PatchPointsLevelsResponse: core.serialization.ObjectSchema<serializers.PatchPointsLevelsResponse.Raw, TrophyApi.PatchPointsLevelsResponse>;
export declare namespace PatchPointsLevelsResponse {
    interface Raw {
        updated: AdminPointsLevel.Raw[];
        issues: AdminIssue.Raw[];
    }
}
