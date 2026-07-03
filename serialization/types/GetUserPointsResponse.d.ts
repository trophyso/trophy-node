import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PointsAward } from "./PointsAward";
import { PointsLevel } from "./PointsLevel";
import { PointsResponse } from "./PointsResponse";
export declare const GetUserPointsResponse: core.serialization.ObjectSchema<serializers.GetUserPointsResponse.Raw, TrophyApi.GetUserPointsResponse>;
export declare namespace GetUserPointsResponse {
    interface Raw extends PointsResponse.Raw {
        total: number;
        level?: PointsLevel.Raw | null;
        awards: PointsAward.Raw[];
    }
}
