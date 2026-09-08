import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateAchievementRequestItem } from "./UpdateAchievementRequestItem";
export declare const UpdateAchievementsRequest: core.serialization.Schema<serializers.UpdateAchievementsRequest.Raw, TrophyApi.UpdateAchievementsRequest>;
export declare namespace UpdateAchievementsRequest {
    type Raw = UpdateAchievementRequestItem.Raw[];
}
