import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PatchPointsTriggersRequestItem } from "./PatchPointsTriggersRequestItem";
export declare const PatchPointsTriggersRequest: core.serialization.Schema<serializers.PatchPointsTriggersRequest.Raw, TrophyApi.PatchPointsTriggersRequest>;
export declare namespace PatchPointsTriggersRequest {
    type Raw = PatchPointsTriggersRequestItem.Raw[];
}
