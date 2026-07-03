import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { AchievementWithStatsResponse } from "../../../types/AchievementWithStatsResponse";
export declare const Response: core.serialization.Schema<serializers.achievements.all.Response.Raw, TrophyApi.AchievementWithStatsResponse[]>;
export declare namespace Response {
    type Raw = AchievementWithStatsResponse.Raw[];
}
