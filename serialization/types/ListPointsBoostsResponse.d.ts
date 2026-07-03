import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsBoost } from "./AdminPointsBoost";
export declare const ListPointsBoostsResponse: core.serialization.Schema<serializers.ListPointsBoostsResponse.Raw, TrophyApi.ListPointsBoostsResponse>;
export declare namespace ListPointsBoostsResponse {
    type Raw = AdminPointsBoost.Raw[];
}
