import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BatchMetricEventUser } from "./BatchMetricEventUser";
export declare const BatchMetricEvent: core.serialization.ObjectSchema<serializers.BatchMetricEvent.Raw, TrophyApi.BatchMetricEvent>;
export declare namespace BatchMetricEvent {
    interface Raw {
        key: string;
        user: BatchMetricEventUser.Raw;
        value: number;
        attributes?: Record<string, string> | null;
        idempotencyKey?: string | null;
    }
}
