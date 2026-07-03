import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsTriggerRequestItem } from "./CreatePointsTriggerRequestItem";
export declare const CreatePointsTriggersRequest: core.serialization.Schema<serializers.CreatePointsTriggersRequest.Raw, TrophyApi.CreatePointsTriggersRequest>;
export declare namespace CreatePointsTriggersRequest {
    type Raw = CreatePointsTriggerRequestItem.Raw[];
}
