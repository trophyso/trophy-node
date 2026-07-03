import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WrappedPoints: core.serialization.ObjectSchema<serializers.WrappedPoints.Raw, TrophyApi.WrappedPoints>;
export declare namespace WrappedPoints {
    interface Raw {
        name: string;
        description?: string | null;
        currentTotal: number;
        changeThisPeriod: number;
        percentChange: number;
        percentileThisPeriod?: number | null;
    }
}
