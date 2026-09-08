import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAchievement } from "./AdminAchievement";
import { AdminIssue } from "./AdminIssue";
export declare const UpdateAchievementsResponse: core.serialization.ObjectSchema<serializers.UpdateAchievementsResponse.Raw, TrophyApi.UpdateAchievementsResponse>;
export declare namespace UpdateAchievementsResponse {
    interface Raw {
        updated: AdminAchievement.Raw[];
        issues: AdminIssue.Raw[];
    }
}
