import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsBoostWebhookPayload } from "./PointsBoostWebhookPayload";
export declare const WebhooksPointsBoostStartedPayload: core.serialization.ObjectSchema<serializers.WebhooksPointsBoostStartedPayload.Raw, TrophyApi.WebhooksPointsBoostStartedPayload>;
export declare namespace WebhooksPointsBoostStartedPayload {
    interface Raw {
        type: "points.boost_started";
        timestamp: string;
        boost: PointsBoostWebhookPayload.Raw;
    }
}
