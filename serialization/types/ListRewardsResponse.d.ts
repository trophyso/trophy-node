import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminReward } from "./AdminReward";
export declare const ListRewardsResponse: core.serialization.Schema<serializers.ListRewardsResponse.Raw, TrophyApi.ListRewardsResponse>;
export declare namespace ListRewardsResponse {
    type Raw = AdminReward.Raw[];
}
