import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminPointsTrigger } from "./AdminPointsTrigger";
export declare const CreatePointsTriggersResponse: core.serialization.ObjectSchema<serializers.CreatePointsTriggersResponse.Raw, TrophyApi.CreatePointsTriggersResponse>;
export declare namespace CreatePointsTriggersResponse {
    interface Raw {
        created: AdminPointsTrigger.Raw[];
        issues: AdminIssue.Raw[];
    }
}
