import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { NotificationChannel } from "./NotificationChannel";
export declare const NotificationPreferences: core.serialization.ObjectSchema<serializers.NotificationPreferences.Raw, TrophyApi.NotificationPreferences>;
export declare namespace NotificationPreferences {
    interface Raw {
        achievement_completed?: NotificationChannel.Raw[] | null;
        recap?: NotificationChannel.Raw[] | null;
        reactivation?: NotificationChannel.Raw[] | null;
        streak_reminder?: NotificationChannel.Raw[] | null;
    }
}
