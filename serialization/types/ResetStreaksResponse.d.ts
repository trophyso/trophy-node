import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
export declare const ResetStreaksResponse: core.serialization.ObjectSchema<serializers.ResetStreaksResponse.Raw, TrophyApi.ResetStreaksResponse>;
export declare namespace ResetStreaksResponse {
    interface Raw {
        resetUsers: string[];
        issues: AdminIssue.Raw[];
    }
}
