import type * as TrophyApi from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { UpsertedUser } from "../../../../types/UpsertedUser";
export declare const AchievementsCompleteRequest: core.serialization.Schema<serializers.AchievementsCompleteRequest.Raw, TrophyApi.AchievementsCompleteRequest>;
export declare namespace AchievementsCompleteRequest {
    interface Raw {
        user: UpsertedUser.Raw;
    }
}
