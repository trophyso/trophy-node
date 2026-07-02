import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsBoostRounding } from "./PointsBoostRounding";
import { PointsBoostStatus } from "./PointsBoostStatus";
export declare const PointsBoost: core.serialization.ObjectSchema<serializers.PointsBoost.Raw, TrophyApi.PointsBoost>;
export declare namespace PointsBoost {
    interface Raw {
        id: string;
        name: string;
        status: PointsBoostStatus.Raw;
        start: string;
        end?: string | null;
        multiplier: number;
        rounding: PointsBoostRounding.Raw;
    }
}
