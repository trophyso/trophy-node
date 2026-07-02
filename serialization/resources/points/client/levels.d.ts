import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { PointsLevel } from "../../../types/PointsLevel";
export declare const Response: core.serialization.Schema<serializers.points.levels.Response.Raw, TrophyApi.PointsLevel[]>;
export declare namespace Response {
    type Raw = PointsLevel.Raw[];
}
