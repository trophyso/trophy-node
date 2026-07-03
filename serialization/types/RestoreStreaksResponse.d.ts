import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
export declare const RestoreStreaksResponse: core.serialization.ObjectSchema<serializers.RestoreStreaksResponse.Raw, TrophyApi.RestoreStreaksResponse>;
export declare namespace RestoreStreaksResponse {
    interface Raw {
        restoredUsers: string[];
        issues: AdminIssue.Raw[];
    }
}
