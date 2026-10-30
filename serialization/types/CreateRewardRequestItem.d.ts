import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateRewardRequestItemStatus } from "./CreateRewardRequestItemStatus";
import { CreateRewardRequestItemType } from "./CreateRewardRequestItemType";
import { CreateRewardRequestItemUserAttributesItem } from "./CreateRewardRequestItemUserAttributesItem";
import { CreateRewardTriggerRequestItem } from "./CreateRewardTriggerRequestItem";
export declare const CreateRewardRequestItem: core.serialization.ObjectSchema<serializers.CreateRewardRequestItem.Raw, TrophyApi.CreateRewardRequestItem>;
export declare namespace CreateRewardRequestItem {
    interface Raw {
        name: string;
        key: string;
        description?: string | null;
        status?: CreateRewardRequestItemStatus.Raw | null;
        type: CreateRewardRequestItemType.Raw;
        pointsSystemId?: string | null;
        points?: number | null;
        maxRedemptions?: number | null;
        userAttributes?: CreateRewardRequestItemUserAttributesItem.Raw[] | null;
        triggers?: CreateRewardTriggerRequestItem.Raw[] | null;
    }
}
