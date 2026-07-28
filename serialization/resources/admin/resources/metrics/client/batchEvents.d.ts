import type * as TrophyApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { BatchMetricEvent } from "../../../../../types/BatchMetricEvent";
export declare const Request: core.serialization.Schema<serializers.admin.metrics.batchEvents.Request.Raw, TrophyApi.BatchMetricEvent[]>;
export declare namespace Request {
    type Raw = BatchMetricEvent.Raw[];
}
