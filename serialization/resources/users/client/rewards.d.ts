import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import type * as serializers from "../../../index";
import { UserRewardResponse } from "../../../types/UserRewardResponse";
export declare const Response: core.serialization.Schema<serializers.users.rewards.Response.Raw, TrophyApi.UserRewardResponse[]>;
export declare namespace Response {
    type Raw = UserRewardResponse.Raw[];
}
