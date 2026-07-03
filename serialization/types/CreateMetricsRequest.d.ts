import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateMetricRequestItem } from "./CreateMetricRequestItem";
export declare const CreateMetricsRequest: core.serialization.Schema<serializers.CreateMetricsRequest.Raw, TrophyApi.CreateMetricsRequest>;
export declare namespace CreateMetricsRequest {
    type Raw = CreateMetricRequestItem.Raw[];
}
