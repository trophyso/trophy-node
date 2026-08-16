import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminIssue } from "./AdminIssue";
import { AdminStreakPause } from "./AdminStreakPause";
export declare const CreateStreakPausesResponse: core.serialization.ObjectSchema<serializers.CreateStreakPausesResponse.Raw, TrophyApi.CreateStreakPausesResponse>;
export declare namespace CreateStreakPausesResponse {
    interface Raw {
        created: AdminStreakPause.Raw[];
        issues: AdminIssue.Raw[];
    }
}
