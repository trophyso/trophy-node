import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateMetricRequestItem } from "./UpdateMetricRequestItem";
export declare const UpdateMetricsRequest: core.serialization.Schema<serializers.UpdateMetricsRequest.Raw, TrophyApi.UpdateMetricsRequest>;
export declare namespace UpdateMetricsRequest {
    type Raw = UpdateMetricRequestItem.Raw[];
}
