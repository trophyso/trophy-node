import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatedMetric } from "./CreatedMetric";
export declare const ListMetricsResponse: core.serialization.Schema<serializers.ListMetricsResponse.Raw, TrophyApi.ListMetricsResponse>;
export declare namespace ListMetricsResponse {
    type Raw = CreatedMetric.Raw[];
}
