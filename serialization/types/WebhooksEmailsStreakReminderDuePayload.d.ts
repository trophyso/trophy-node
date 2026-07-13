import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { StreakResponse } from "./StreakResponse";
import { User } from "./User";
export declare const WebhooksEmailsStreakReminderDuePayload: core.serialization.ObjectSchema<serializers.WebhooksEmailsStreakReminderDuePayload.Raw, TrophyApi.WebhooksEmailsStreakReminderDuePayload>;
export declare namespace WebhooksEmailsStreakReminderDuePayload {
    interface Raw {
        type: "emails.streak_reminder_due";
        timestamp: string;
        user: User.Raw;
        streak: StreakResponse.Raw;
    }
}
