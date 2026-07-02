import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminPointsTrigger } from "./AdminPointsTrigger";
export declare const PatchPointsTriggersResponse: core.serialization.ObjectSchema<serializers.PatchPointsTriggersResponse.Raw, TrophyApi.PatchPointsTriggersResponse>;
export declare namespace PatchPointsTriggersResponse {
    interface Raw {
        updated: AdminPointsTrigger.Raw[];
        issues: AdminIssue.Raw[];
    }
}
