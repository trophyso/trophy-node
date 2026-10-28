import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateRewardRequestItemStatus } from "./UpdateRewardRequestItemStatus";
import { UpdateRewardRequestItemType } from "./UpdateRewardRequestItemType";
import { UpdateRewardRequestItemUserAttributesItem } from "./UpdateRewardRequestItemUserAttributesItem";
export declare const UpdateRewardRequestItem: core.serialization.ObjectSchema<serializers.UpdateRewardRequestItem.Raw, TrophyApi.UpdateRewardRequestItem>;
export declare namespace UpdateRewardRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
        description?: string | null;
        status?: UpdateRewardRequestItemStatus.Raw | null;
        type?: UpdateRewardRequestItemType.Raw | null;
        pointsSystemId?: string | null;
        points?: number | null;
        maxRedemptions?: number | null;
        userAttributes?: UpdateRewardRequestItemUserAttributesItem.Raw[] | null;
    }
}
