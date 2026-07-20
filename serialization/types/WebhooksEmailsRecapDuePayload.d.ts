import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
import { WebhooksEmailsRecapDuePayloadRecap } from "./WebhooksEmailsRecapDuePayloadRecap";
export declare const WebhooksEmailsRecapDuePayload: core.serialization.ObjectSchema<serializers.WebhooksEmailsRecapDuePayload.Raw, TrophyApi.WebhooksEmailsRecapDuePayload>;
export declare namespace WebhooksEmailsRecapDuePayload {
    interface Raw {
        type: "emails.recap_due";
        timestamp: string;
        user: User.Raw;
        recap: WebhooksEmailsRecapDuePayloadRecap.Raw;
    }
}
