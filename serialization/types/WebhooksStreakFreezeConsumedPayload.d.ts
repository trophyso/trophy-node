import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
export declare const WebhooksStreakFreezeConsumedPayload: core.serialization.ObjectSchema<serializers.WebhooksStreakFreezeConsumedPayload.Raw, TrophyApi.WebhooksStreakFreezeConsumedPayload>;
export declare namespace WebhooksStreakFreezeConsumedPayload {
    interface Raw {
        type: "streak.freeze_consumed";
        user: User.Raw;
        consumed: number;
        freezes: number;
    }
}
