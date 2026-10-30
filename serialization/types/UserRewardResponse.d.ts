import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RewardSummary } from "./RewardSummary";
import { UserRewardTrigger } from "./UserRewardTrigger";
export declare const UserRewardResponse: core.serialization.ObjectSchema<serializers.UserRewardResponse.Raw, TrophyApi.UserRewardResponse>;
export declare namespace UserRewardResponse {
    interface Raw {
        id: string;
        awardedAt: string;
        redeemed: boolean;
        redeemedAt?: string | null;
        reward: RewardSummary.Raw;
        trigger?: UserRewardTrigger.Raw | null;
    }
}
