import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WrappedMetricByAttributeValueValue: core.serialization.ObjectSchema<serializers.WrappedMetricByAttributeValueValue.Raw, TrophyApi.WrappedMetricByAttributeValueValue>;
export declare namespace WrappedMetricByAttributeValueValue {
    interface Raw {
        name?: string | null;
        units?: string | null;
        currentTotal?: number | null;
        changeThisPeriod?: number | null;
        percentChange?: number | null;
        percentileThisPeriod?: number | null;
    }
}
