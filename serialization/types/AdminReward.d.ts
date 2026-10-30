import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminRewardStatus } from "./AdminRewardStatus";
import { AdminRewardType } from "./AdminRewardType";
import { AdminRewardUserAttributesItem } from "./AdminRewardUserAttributesItem";
export declare const AdminReward: core.serialization.ObjectSchema<serializers.AdminReward.Raw, TrophyApi.AdminReward>;
export declare namespace AdminReward {
    interface Raw {
        id: string;
        name: string;
        key: string;
        description?: string | null;
        status: AdminRewardStatus.Raw;
        type: AdminRewardType.Raw;
        pointsSystemId?: string | null;
        points?: number | null;
        maxRedemptions?: number | null;
        userAttributes: AdminRewardUserAttributesItem.Raw[];
    }
}
