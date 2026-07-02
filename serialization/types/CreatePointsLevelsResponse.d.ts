import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminPointsLevel } from "./AdminPointsLevel";
export declare const CreatePointsLevelsResponse: core.serialization.ObjectSchema<serializers.CreatePointsLevelsResponse.Raw, TrophyApi.CreatePointsLevelsResponse>;
export declare namespace CreatePointsLevelsResponse {
    interface Raw {
        created: AdminPointsLevel.Raw[];
        issues: AdminIssue.Raw[];
    }
}
