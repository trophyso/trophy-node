import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsBoostWebhookPayloadRounding: core.serialization.Schema<serializers.PointsBoostWebhookPayloadRounding.Raw, TrophyApi.PointsBoostWebhookPayloadRounding>;
export declare namespace PointsBoostWebhookPayloadRounding {
    type Raw = "down" | "up" | "nearest";
}
