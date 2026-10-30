import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateRewardTriggersRequestItem } from "./UpdateRewardTriggersRequestItem";
export declare const UpdateRewardTriggersRequest: core.serialization.Schema<serializers.UpdateRewardTriggersRequest.Raw, TrophyApi.UpdateRewardTriggersRequest>;
export declare namespace UpdateRewardTriggersRequest {
    type Raw = UpdateRewardTriggersRequestItem.Raw[];
}
