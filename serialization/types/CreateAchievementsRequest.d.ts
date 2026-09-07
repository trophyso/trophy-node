import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateAchievementRequestItem } from "./CreateAchievementRequestItem";
export declare const CreateAchievementsRequest: core.serialization.Schema<serializers.CreateAchievementsRequest.Raw, TrophyApi.CreateAchievementsRequest>;
export declare namespace CreateAchievementsRequest {
    type Raw = CreateAchievementRequestItem.Raw[];
}
