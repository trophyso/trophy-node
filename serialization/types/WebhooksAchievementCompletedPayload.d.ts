import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
import { UserAchievementResponse } from "./UserAchievementResponse";
export declare const WebhooksAchievementCompletedPayload: core.serialization.ObjectSchema<serializers.WebhooksAchievementCompletedPayload.Raw, TrophyApi.WebhooksAchievementCompletedPayload>;
export declare namespace WebhooksAchievementCompletedPayload {
    interface Raw {
        type: "achievement.completed";
        user: User.Raw;
        achievement: UserAchievementResponse.Raw;
    }
}
