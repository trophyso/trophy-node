import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WebhooksEmailsReactivationDuePayloadReactivation: core.serialization.ObjectSchema<serializers.WebhooksEmailsReactivationDuePayloadReactivation.Raw, TrophyApi.WebhooksEmailsReactivationDuePayloadReactivation>;
export declare namespace WebhooksEmailsReactivationDuePayloadReactivation {
    interface Raw {
        messageNumber: number;
        daysSinceLastActive: number;
    }
}
