import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsBoostWebhookPayloadStatus: core.serialization.Schema<serializers.PointsBoostWebhookPayloadStatus.Raw, TrophyApi.PointsBoostWebhookPayloadStatus>;
export declare namespace PointsBoostWebhookPayloadStatus {
    type Raw = "active" | "finished";
}
