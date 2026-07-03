import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WrappedMetricByAttributeValueValue } from "./WrappedMetricByAttributeValueValue";
export declare const WrappedMetric: core.serialization.ObjectSchema<serializers.WrappedMetric.Raw, TrophyApi.WrappedMetric>;
export declare namespace WrappedMetric {
    interface Raw {
        name: string;
        units?: string | null;
        currentTotal: number;
        changeThisPeriod: number;
        percentChange: number;
        percentileThisPeriod?: number | null;
        byAttribute: Record<string, Record<string, WrappedMetricByAttributeValueValue.Raw>>;
    }
}
