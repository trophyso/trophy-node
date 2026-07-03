import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { MetricEventPointsResponse } from "./MetricEventPointsResponse";
import { User } from "./User";
export declare const WebhooksPointsChangedPayload: core.serialization.ObjectSchema<serializers.WebhooksPointsChangedPayload.Raw, TrophyApi.WebhooksPointsChangedPayload>;
export declare namespace WebhooksPointsChangedPayload {
    interface Raw {
        type: "points.changed";
        user: User.Raw;
        points: MetricEventPointsResponse.Raw;
    }
}
