import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsResponse } from "./PointsResponse";
export declare const WebhooksPointsLevelChangedPayloadPoints: core.serialization.ObjectSchema<serializers.WebhooksPointsLevelChangedPayloadPoints.Raw, TrophyApi.WebhooksPointsLevelChangedPayloadPoints>;
export declare namespace WebhooksPointsLevelChangedPayloadPoints {
    interface Raw extends PointsResponse.Raw {
        total: number;
    }
}
