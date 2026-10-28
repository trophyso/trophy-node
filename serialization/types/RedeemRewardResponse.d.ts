import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { MetricEventPointsResponse } from "./MetricEventPointsResponse";
import { RedeemedReward } from "./RedeemedReward";
import { RewardSummary } from "./RewardSummary";
export declare const RedeemRewardResponse: core.serialization.ObjectSchema<serializers.RedeemRewardResponse.Raw, TrophyApi.RedeemRewardResponse>;
export declare namespace RedeemRewardResponse {
    interface Raw {
        reward: RewardSummary.Raw;
        redemptions: RedeemedReward.Raw[];
        points?: Record<string, MetricEventPointsResponse.Raw> | null;
    }
}
