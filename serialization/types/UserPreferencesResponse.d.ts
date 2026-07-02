import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { NotificationPreferences } from "./NotificationPreferences";
import { StreakPreferences } from "./StreakPreferences";
export declare const UserPreferencesResponse: core.serialization.ObjectSchema<serializers.UserPreferencesResponse.Raw, TrophyApi.UserPreferencesResponse>;
export declare namespace UserPreferencesResponse {
    interface Raw {
        notifications: NotificationPreferences.Raw;
        streak?: StreakPreferences.Raw | null;
    }
}
