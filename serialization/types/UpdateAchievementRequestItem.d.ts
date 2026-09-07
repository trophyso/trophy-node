import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateAchievementRequestItemBadge } from "./UpdateAchievementRequestItemBadge";
import { UpdateAchievementRequestItemEventAttributesItem } from "./UpdateAchievementRequestItemEventAttributesItem";
import { UpdateAchievementRequestItemStatus } from "./UpdateAchievementRequestItemStatus";
import { UpdateAchievementRequestItemTrigger } from "./UpdateAchievementRequestItemTrigger";
import { UpdateAchievementRequestItemUserAttributesItem } from "./UpdateAchievementRequestItemUserAttributesItem";
export declare const UpdateAchievementRequestItem: core.serialization.ObjectSchema<serializers.UpdateAchievementRequestItem.Raw, TrophyApi.UpdateAchievementRequestItem>;
export declare namespace UpdateAchievementRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
        trigger?: UpdateAchievementRequestItemTrigger.Raw | null;
        description?: string | null;
        status?: UpdateAchievementRequestItemStatus.Raw | null;
        badge?: UpdateAchievementRequestItemBadge.Raw | null;
        userAttributes?: UpdateAchievementRequestItemUserAttributesItem.Raw[] | null;
        key?: string | null;
        metricId?: string | null;
        metricValue?: number | null;
        eventAttributes?: UpdateAchievementRequestItemEventAttributesItem.Raw[] | null;
        streakLength?: number | null;
        anniversaryYears?: number | null;
        achievementIds?: string[] | null;
    }
}
