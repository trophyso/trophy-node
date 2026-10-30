import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateRewardTriggerRequestItem } from "./CreateRewardTriggerRequestItem";
export declare const CreateRewardTriggersRequest: core.serialization.Schema<serializers.CreateRewardTriggersRequest.Raw, TrophyApi.CreateRewardTriggersRequest>;
export declare namespace CreateRewardTriggersRequest {
    type Raw = CreateRewardTriggerRequestItem.Raw[];
}
