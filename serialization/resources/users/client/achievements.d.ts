import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { UserAchievementWithStatsResponse } from "../../../types/UserAchievementWithStatsResponse";
export declare const Response: core.serialization.Schema<serializers.users.achievements.Response.Raw, TrophyApi.UserAchievementWithStatsResponse[]>;
export declare namespace Response {
    type Raw = UserAchievementWithStatsResponse.Raw[];
}
