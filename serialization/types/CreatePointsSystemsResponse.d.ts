import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { CreatedAdminPointsSystem } from "./CreatedAdminPointsSystem";
export declare const CreatePointsSystemsResponse: core.serialization.ObjectSchema<serializers.CreatePointsSystemsResponse.Raw, TrophyApi.CreatePointsSystemsResponse>;
export declare namespace CreatePointsSystemsResponse {
    interface Raw {
        created: CreatedAdminPointsSystem.Raw[];
        issues: AdminIssue.Raw[];
    }
}
