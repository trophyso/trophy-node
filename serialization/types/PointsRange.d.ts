import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PointsRange: core.serialization.ObjectSchema<serializers.PointsRange.Raw, TrophyApi.PointsRange>;
export declare namespace PointsRange {
    interface Raw {
        from: number;
        to: number;
        users: number;
    }
}
