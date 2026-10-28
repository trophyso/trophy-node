import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UserRewardTrigger } from "./UserRewardTrigger";
export declare const RewardWebhookEventRedemption: core.serialization.ObjectSchema<serializers.RewardWebhookEventRedemption.Raw, TrophyApi.RewardWebhookEventRedemption>;
export declare namespace RewardWebhookEventRedemption {
    interface Raw {
        id: string;
        redeemed: boolean;
        awardedAt: string;
        redeemedAt?: string | null;
        trigger?: UserRewardTrigger.Raw | null;
    }
}
