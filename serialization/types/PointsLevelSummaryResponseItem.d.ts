import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsLevel } from "./PointsLevel";
export declare const PointsLevelSummaryResponseItem: core.serialization.ObjectSchema<serializers.PointsLevelSummaryResponseItem.Raw, TrophyApi.PointsLevelSummaryResponseItem>;
export declare namespace PointsLevelSummaryResponseItem {
    interface Raw {
        level: PointsLevel.Raw;
        users: number;
    }
}
