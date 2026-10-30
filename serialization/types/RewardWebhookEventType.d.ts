import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RewardWebhookEventType: core.serialization.Schema<serializers.RewardWebhookEventType.Raw, TrophyApi.RewardWebhookEventType>;
export declare namespace RewardWebhookEventType {
    type Raw = "reward.awarded" | "reward.redeemed";
}
