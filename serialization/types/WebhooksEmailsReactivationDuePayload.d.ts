import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
import { WebhooksEmailsReactivationDuePayloadReactivation } from "./WebhooksEmailsReactivationDuePayloadReactivation";
export declare const WebhooksEmailsReactivationDuePayload: core.serialization.ObjectSchema<serializers.WebhooksEmailsReactivationDuePayload.Raw, TrophyApi.WebhooksEmailsReactivationDuePayload>;
export declare namespace WebhooksEmailsReactivationDuePayload {
    interface Raw {
        type: "emails.reactivation_due";
        timestamp: string;
        user: User.Raw;
        reactivation: WebhooksEmailsReactivationDuePayloadReactivation.Raw;
    }
}
