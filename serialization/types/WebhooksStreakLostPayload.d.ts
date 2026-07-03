import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
export declare const WebhooksStreakLostPayload: core.serialization.ObjectSchema<serializers.WebhooksStreakLostPayload.Raw, TrophyApi.WebhooksStreakLostPayload>;
export declare namespace WebhooksStreakLostPayload {
    interface Raw {
        type: "streak.lost";
        user: User.Raw;
        length: number;
    }
}
