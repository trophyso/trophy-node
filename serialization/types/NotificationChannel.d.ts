import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const NotificationChannel: core.serialization.Schema<serializers.NotificationChannel.Raw, TrophyApi.NotificationChannel>;
export declare namespace NotificationChannel {
    type Raw = "email" | "push";
}
