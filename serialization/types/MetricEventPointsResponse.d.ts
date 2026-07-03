import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsAward } from "./PointsAward";
import { PointsLevel } from "./PointsLevel";
import { PointsResponse } from "./PointsResponse";
export declare const MetricEventPointsResponse: core.serialization.ObjectSchema<serializers.MetricEventPointsResponse.Raw, TrophyApi.MetricEventPointsResponse>;
export declare namespace MetricEventPointsResponse {
    interface Raw extends PointsResponse.Raw {
        total: number;
        level?: PointsLevel.Raw | null;
        added: number;
        awards: PointsAward.Raw[];
    }
}
