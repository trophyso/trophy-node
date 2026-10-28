import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateRewardRequestItem } from "./CreateRewardRequestItem";
export declare const CreateRewardsRequest: core.serialization.Schema<serializers.CreateRewardsRequest.Raw, TrophyApi.CreateRewardsRequest>;
export declare namespace CreateRewardsRequest {
    type Raw = CreateRewardRequestItem.Raw[];
}
