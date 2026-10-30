import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateRewardTriggersRequestItemEventAttributesItem } from "./UpdateRewardTriggersRequestItemEventAttributesItem";
import { UpdateRewardTriggersRequestItemStatus } from "./UpdateRewardTriggersRequestItemStatus";
import { UpdateRewardTriggersRequestItemType } from "./UpdateRewardTriggersRequestItemType";
import { UpdateRewardTriggersRequestItemUserAttributesItem } from "./UpdateRewardTriggersRequestItemUserAttributesItem";
export declare const UpdateRewardTriggersRequestItem: core.serialization.ObjectSchema<serializers.UpdateRewardTriggersRequestItem.Raw, TrophyApi.UpdateRewardTriggersRequestItem>;
export declare namespace UpdateRewardTriggersRequestItem {
    interface Raw {
        id: string;
        type?: UpdateRewardTriggersRequestItemType.Raw | null;
        status?: UpdateRewardTriggersRequestItemStatus.Raw | null;
        userAttributes?: UpdateRewardTriggersRequestItemUserAttributesItem.Raw[] | null;
        metricId?: string | null;
        metricThreshold?: number | null;
        eventAttributes?: UpdateRewardTriggersRequestItemEventAttributesItem.Raw[] | null;
        achievementId?: string | null;
        streakLength?: number | null;
        leaderboardId?: string | null;
        rank?: number | null;
    }
}
