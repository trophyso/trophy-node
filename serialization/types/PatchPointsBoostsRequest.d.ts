import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PatchPointsBoostsRequestItem } from "./PatchPointsBoostsRequestItem";
export declare const PatchPointsBoostsRequest: core.serialization.Schema<serializers.PatchPointsBoostsRequest.Raw, TrophyApi.PatchPointsBoostsRequest>;
export declare namespace PatchPointsBoostsRequest {
    type Raw = PatchPointsBoostsRequestItem.Raw[];
}
