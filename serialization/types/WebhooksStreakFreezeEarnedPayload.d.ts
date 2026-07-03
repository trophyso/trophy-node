import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
export declare const WebhooksStreakFreezeEarnedPayload: core.serialization.ObjectSchema<serializers.WebhooksStreakFreezeEarnedPayload.Raw, TrophyApi.WebhooksStreakFreezeEarnedPayload>;
export declare namespace WebhooksStreakFreezeEarnedPayload {
    interface Raw {
        type: "streak.freeze_earned";
        user: User.Raw;
        earned: number;
        freezes: number;
    }
}
