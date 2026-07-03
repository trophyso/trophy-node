import type * as TrophyApi from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { NotificationPreferences } from "../../../../types/NotificationPreferences";
import { StreakPreferences } from "../../../../types/StreakPreferences";
export declare const UpdateUserPreferencesRequest: core.serialization.Schema<serializers.UpdateUserPreferencesRequest.Raw, TrophyApi.UpdateUserPreferencesRequest>;
export declare namespace UpdateUserPreferencesRequest {
    interface Raw {
        notifications?: NotificationPreferences.Raw | null;
        streak?: StreakPreferences.Raw | null;
    }
}
