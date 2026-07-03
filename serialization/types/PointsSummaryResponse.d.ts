import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsRange } from "./PointsRange";
export declare const PointsSummaryResponse: core.serialization.Schema<serializers.PointsSummaryResponse.Raw, TrophyApi.PointsSummaryResponse>;
export declare namespace PointsSummaryResponse {
    type Raw = PointsRange.Raw[];
}
