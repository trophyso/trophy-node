import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { NotificationChannel } from "./NotificationChannel";
export declare const MessagingPreferences: core.serialization.ObjectSchema<serializers.MessagingPreferences.Raw, TrophyApi.MessagingPreferences>;
export declare namespace MessagingPreferences {
    interface Raw {
        channels?: NotificationChannel.Raw[] | null;
        temperature?: number | null;
    }
}
