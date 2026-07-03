import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { PointsBoost } from "../../../types/PointsBoost";
export declare const Response: core.serialization.Schema<serializers.users.pointsBoosts.Response.Raw, TrophyApi.PointsBoost[]>;
export declare namespace Response {
    type Raw = PointsBoost.Raw[];
}
