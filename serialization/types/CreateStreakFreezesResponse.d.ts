import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
export declare const CreateStreakFreezesResponse: core.serialization.ObjectSchema<serializers.CreateStreakFreezesResponse.Raw, TrophyApi.CreateStreakFreezesResponse>;
export declare namespace CreateStreakFreezesResponse {
    interface Raw {
        issues: AdminIssue.Raw[];
    }
}
