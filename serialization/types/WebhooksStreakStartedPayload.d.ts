import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BaseStreakResponse } from "./BaseStreakResponse";
import { User } from "./User";
export declare const WebhooksStreakStartedPayload: core.serialization.ObjectSchema<serializers.WebhooksStreakStartedPayload.Raw, TrophyApi.WebhooksStreakStartedPayload>;
export declare namespace WebhooksStreakStartedPayload {
    interface Raw {
        type: "streak.started";
        user: User.Raw;
        streak: BaseStreakResponse.Raw;
    }
}
