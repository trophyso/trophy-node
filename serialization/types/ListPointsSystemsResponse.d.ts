import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsSystem } from "./AdminPointsSystem";
export declare const ListPointsSystemsResponse: core.serialization.Schema<serializers.ListPointsSystemsResponse.Raw, TrophyApi.ListPointsSystemsResponse>;
export declare namespace ListPointsSystemsResponse {
    type Raw = AdminPointsSystem.Raw[];
}
