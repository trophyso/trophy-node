import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BaseStreakResponse } from "./BaseStreakResponse";
import { User } from "./User";
export declare const WebhooksStreakExtendedPayload: core.serialization.ObjectSchema<serializers.WebhooksStreakExtendedPayload.Raw, TrophyApi.WebhooksStreakExtendedPayload>;
export declare namespace WebhooksStreakExtendedPayload {
    interface Raw {
        type: "streak.extended";
        user: User.Raw;
        streak: BaseStreakResponse.Raw;
    }
}
