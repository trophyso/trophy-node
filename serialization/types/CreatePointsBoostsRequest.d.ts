import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsBoostRequestItem } from "./CreatePointsBoostRequestItem";
export declare const CreatePointsBoostsRequest: core.serialization.Schema<serializers.CreatePointsBoostsRequest.Raw, TrophyApi.CreatePointsBoostsRequest>;
export declare namespace CreatePointsBoostsRequest {
    type Raw = CreatePointsBoostRequestItem.Raw[];
}
