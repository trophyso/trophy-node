import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { PatchPointsLevelsRequestItem } from "./PatchPointsLevelsRequestItem";
export declare const PatchPointsLevelsRequest: core.serialization.Schema<serializers.PatchPointsLevelsRequest.Raw, TrophyApi.PatchPointsLevelsRequest>;
export declare namespace PatchPointsLevelsRequest {
    type Raw = PatchPointsLevelsRequestItem.Raw[];
}
