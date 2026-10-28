import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateRewardRequestItem } from "./UpdateRewardRequestItem";
export declare const UpdateRewardsRequest: core.serialization.Schema<serializers.UpdateRewardsRequest.Raw, TrophyApi.UpdateRewardsRequest>;
export declare namespace UpdateRewardsRequest {
    type Raw = UpdateRewardRequestItem.Raw[];
}
