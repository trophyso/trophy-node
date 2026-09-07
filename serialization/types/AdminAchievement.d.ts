import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAchievementBadge } from "./AdminAchievementBadge";
import { AdminAchievementEventAttributesItem } from "./AdminAchievementEventAttributesItem";
import { AdminAchievementStatus } from "./AdminAchievementStatus";
import { AdminAchievementTrigger } from "./AdminAchievementTrigger";
import { AdminAchievementUserAttributesItem } from "./AdminAchievementUserAttributesItem";
export declare const AdminAchievement: core.serialization.ObjectSchema<serializers.AdminAchievement.Raw, TrophyApi.AdminAchievement>;
export declare namespace AdminAchievement {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        trigger: AdminAchievementTrigger.Raw;
        status: AdminAchievementStatus.Raw;
        badge?: AdminAchievementBadge.Raw | null;
        userAttributes: AdminAchievementUserAttributesItem.Raw[];
        key?: string | null;
        metricId?: string | null;
        metricValue?: number | null;
        eventAttributes?: AdminAchievementEventAttributesItem.Raw[] | null;
        streakLength?: number | null;
        anniversaryYears?: number | null;
        achievementIds?: string[] | null;
    }
}
