import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
import { UserAchievementResponse } from "./UserAchievementResponse";
export declare const WebhooksEmailsAchievementDuePayload: core.serialization.ObjectSchema<serializers.WebhooksEmailsAchievementDuePayload.Raw, TrophyApi.WebhooksEmailsAchievementDuePayload>;
export declare namespace WebhooksEmailsAchievementDuePayload {
    interface Raw {
        type: "emails.achievement_due";
        timestamp: string;
        user: User.Raw;
        achievement: UserAchievementResponse.Raw;
    }
}
