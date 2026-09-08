import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAchievement } from "./AdminAchievement";
import { AdminIssue } from "./AdminIssue";
export declare const CreateAchievementsResponse: core.serialization.ObjectSchema<serializers.CreateAchievementsResponse.Raw, TrophyApi.CreateAchievementsResponse>;
export declare namespace CreateAchievementsResponse {
    interface Raw {
        created: AdminAchievement.Raw[];
        issues: AdminIssue.Raw[];
    }
}
