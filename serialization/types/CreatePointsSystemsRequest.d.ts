import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsSystemRequestItem } from "./CreatePointsSystemRequestItem";
export declare const CreatePointsSystemsRequest: core.serialization.Schema<serializers.CreatePointsSystemsRequest.Raw, TrophyApi.CreatePointsSystemsRequest>;
export declare namespace CreatePointsSystemsRequest {
    type Raw = CreatePointsSystemRequestItem.Raw[];
}
