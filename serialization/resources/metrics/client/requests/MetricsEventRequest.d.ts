import type * as TrophyApi from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { UpsertedUser } from "../../../../types/UpsertedUser";
export declare const MetricsEventRequest: core.serialization.Schema<serializers.MetricsEventRequest.Raw, Omit<TrophyApi.MetricsEventRequest, "idempotencyKey">>;
export declare namespace MetricsEventRequest {
    interface Raw {
        user: UpsertedUser.Raw;
        value: number;
        attributes?: Record<string, string> | null;
    }
}
