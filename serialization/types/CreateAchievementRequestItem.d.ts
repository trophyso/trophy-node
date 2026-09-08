import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateAchievementRequestItemBadge } from "./CreateAchievementRequestItemBadge";
import { CreateAchievementRequestItemEventAttributesItem } from "./CreateAchievementRequestItemEventAttributesItem";
import { CreateAchievementRequestItemStatus } from "./CreateAchievementRequestItemStatus";
import { CreateAchievementRequestItemTrigger } from "./CreateAchievementRequestItemTrigger";
import { CreateAchievementRequestItemUserAttributesItem } from "./CreateAchievementRequestItemUserAttributesItem";
export declare const CreateAchievementRequestItem: core.serialization.ObjectSchema<serializers.CreateAchievementRequestItem.Raw, TrophyApi.CreateAchievementRequestItem>;
export declare namespace CreateAchievementRequestItem {
    interface Raw {
        name: string;
        trigger: CreateAchievementRequestItemTrigger.Raw;
        description?: string | null;
        status?: CreateAchievementRequestItemStatus.Raw | null;
        badge?: CreateAchievementRequestItemBadge.Raw | null;
        userAttributes?: CreateAchievementRequestItemUserAttributesItem.Raw[] | null;
        key?: string | null;
        metricId?: string | null;
        metricValue?: number | null;
        eventAttributes?: CreateAchievementRequestItemEventAttributesItem.Raw[] | null;
        streakLength?: number | null;
        anniversaryYears?: number | null;
        achievementIds?: string[] | null;
    }
}
