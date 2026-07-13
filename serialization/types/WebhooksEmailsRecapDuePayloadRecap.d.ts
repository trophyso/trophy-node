import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WebhooksEmailsRecapDuePayloadRecap: core.serialization.ObjectSchema<serializers.WebhooksEmailsRecapDuePayloadRecap.Raw, TrophyApi.WebhooksEmailsRecapDuePayloadRecap>;
export declare namespace WebhooksEmailsRecapDuePayloadRecap {
    interface Raw {
        periodStart: string;
        periodEnd: string;
    }
}
