import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsLevel } from "./AdminPointsLevel";
export declare const ListPointsLevelsResponse: core.serialization.Schema<serializers.ListPointsLevelsResponse.Raw, TrophyApi.ListPointsLevelsResponse>;
export declare namespace ListPointsLevelsResponse {
    type Raw = AdminPointsLevel.Raw[];
}
