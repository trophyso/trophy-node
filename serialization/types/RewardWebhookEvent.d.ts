import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { RewardSummary } from "./RewardSummary";
import { RewardWebhookEventRedemption } from "./RewardWebhookEventRedemption";
import { RewardWebhookEventType } from "./RewardWebhookEventType";
import { User } from "./User";
export declare const RewardWebhookEvent: core.serialization.ObjectSchema<serializers.RewardWebhookEvent.Raw, TrophyApi.RewardWebhookEvent>;
export declare namespace RewardWebhookEvent {
    interface Raw {
        type: RewardWebhookEventType.Raw;
        timestamp: string;
        user: User.Raw;
        reward: RewardSummary.Raw;
        redemption: RewardWebhookEventRedemption.Raw;
    }
}
