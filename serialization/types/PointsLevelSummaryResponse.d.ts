import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsLevelSummaryResponseItem } from "./PointsLevelSummaryResponseItem";
export declare const PointsLevelSummaryResponse: core.serialization.Schema<serializers.PointsLevelSummaryResponse.Raw, TrophyApi.PointsLevelSummaryResponse>;
export declare namespace PointsLevelSummaryResponse {
    type Raw = PointsLevelSummaryResponseItem.Raw[];
}
