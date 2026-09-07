import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAchievement } from "./AdminAchievement";
export declare const ListAchievementsResponse: core.serialization.Schema<serializers.ListAchievementsResponse.Raw, TrophyApi.ListAchievementsResponse>;
export declare namespace ListAchievementsResponse {
    type Raw = AdminAchievement.Raw[];
}
