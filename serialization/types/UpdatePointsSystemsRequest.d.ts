import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdatePointsSystemRequestItem } from "./UpdatePointsSystemRequestItem";
export declare const UpdatePointsSystemsRequest: core.serialization.Schema<serializers.UpdatePointsSystemsRequest.Raw, TrophyApi.UpdatePointsSystemsRequest>;
export declare namespace UpdatePointsSystemsRequest {
    type Raw = UpdatePointsSystemRequestItem.Raw[];
}
