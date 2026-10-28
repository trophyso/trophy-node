import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateRewardTriggerRequestItemEventAttributesItem } from "./CreateRewardTriggerRequestItemEventAttributesItem";
import { CreateRewardTriggerRequestItemStatus } from "./CreateRewardTriggerRequestItemStatus";
import { CreateRewardTriggerRequestItemType } from "./CreateRewardTriggerRequestItemType";
import { CreateRewardTriggerRequestItemUserAttributesItem } from "./CreateRewardTriggerRequestItemUserAttributesItem";
export declare const CreateRewardTriggerRequestItem: core.serialization.ObjectSchema<serializers.CreateRewardTriggerRequestItem.Raw, TrophyApi.CreateRewardTriggerRequestItem>;
export declare namespace CreateRewardTriggerRequestItem {
    interface Raw {
        type: CreateRewardTriggerRequestItemType.Raw;
        status?: CreateRewardTriggerRequestItemStatus.Raw | null;
        userAttributes?: CreateRewardTriggerRequestItemUserAttributesItem.Raw[] | null;
        metricId?: string | null;
        metricThreshold?: number | null;
        eventAttributes?: CreateRewardTriggerRequestItemEventAttributesItem.Raw[] | null;
        achievementId?: string | null;
        streakLength?: number | null;
        leaderboardId?: string | null;
        rank?: number | null;
    }
}
