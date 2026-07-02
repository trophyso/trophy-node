import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsTrigger } from "./AdminPointsTrigger";
export declare const ListPointsTriggersResponse: core.serialization.Schema<serializers.ListPointsTriggersResponse.Raw, TrophyApi.ListPointsTriggersResponse>;
export declare namespace ListPointsTriggersResponse {
    type Raw = AdminPointsTrigger.Raw[];
}
