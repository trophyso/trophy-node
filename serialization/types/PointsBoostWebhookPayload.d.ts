import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsBoostWebhookPayloadRounding } from "./PointsBoostWebhookPayloadRounding";
import { PointsBoostWebhookPayloadStatus } from "./PointsBoostWebhookPayloadStatus";
export declare const PointsBoostWebhookPayload: core.serialization.ObjectSchema<serializers.PointsBoostWebhookPayload.Raw, TrophyApi.PointsBoostWebhookPayload>;
export declare namespace PointsBoostWebhookPayload {
    interface Raw {
        id: string;
        name: string;
        status: PointsBoostWebhookPayloadStatus.Raw;
        userId?: string | null;
        pointsSystemId: string;
        pointsSystemKey: string;
        pointsSystemName: string;
        start: string;
        end?: string | null;
        multiplier: number;
        rounding: PointsBoostWebhookPayloadRounding.Raw;
    }
}
