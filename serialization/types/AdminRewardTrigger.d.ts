import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminRewardTriggerEventAttributesItem } from "./AdminRewardTriggerEventAttributesItem";
import { AdminRewardTriggerStatus } from "./AdminRewardTriggerStatus";
import { AdminRewardTriggerType } from "./AdminRewardTriggerType";
import { AdminRewardTriggerUserAttributesItem } from "./AdminRewardTriggerUserAttributesItem";
export declare const AdminRewardTrigger: core.serialization.ObjectSchema<serializers.AdminRewardTrigger.Raw, TrophyApi.AdminRewardTrigger>;
export declare namespace AdminRewardTrigger {
    interface Raw {
        id: string;
        type: AdminRewardTriggerType.Raw;
        status: AdminRewardTriggerStatus.Raw;
        userAttributes: AdminRewardTriggerUserAttributesItem.Raw[];
        metricId?: string | null;
        metricThreshold?: number | null;
        eventAttributes?: AdminRewardTriggerEventAttributesItem.Raw[] | null;
        achievementId?: string | null;
        streakLength?: number | null;
        leaderboardId?: string | null;
        rank?: number | null;
    }
}
