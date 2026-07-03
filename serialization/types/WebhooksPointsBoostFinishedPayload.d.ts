import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsBoostWebhookPayload } from "./PointsBoostWebhookPayload";
export declare const WebhooksPointsBoostFinishedPayload: core.serialization.ObjectSchema<serializers.WebhooksPointsBoostFinishedPayload.Raw, TrophyApi.WebhooksPointsBoostFinishedPayload>;
export declare namespace WebhooksPointsBoostFinishedPayload {
    interface Raw {
        type: "points.boost_finished";
        timestamp: string;
        boost: PointsBoostWebhookPayload.Raw;
    }
}
