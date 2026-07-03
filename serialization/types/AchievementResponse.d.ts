import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AchievementResponseEventAttribute } from "./AchievementResponseEventAttribute";
import { AchievementResponseEventAttributesItem } from "./AchievementResponseEventAttributesItem";
import { AchievementResponseTrigger } from "./AchievementResponseTrigger";
import { AchievementResponseUserAttributesItem } from "./AchievementResponseUserAttributesItem";
export declare const AchievementResponse: core.serialization.ObjectSchema<serializers.AchievementResponse.Raw, TrophyApi.AchievementResponse>;
export declare namespace AchievementResponse {
    interface Raw {
        id: string;
        name: string;
        trigger: AchievementResponseTrigger.Raw;
        description?: string | null;
        badgeUrl?: string | null;
        key?: string | null;
        streakLength?: number | null;
        achievementIds?: string[] | null;
        metricId?: string | null;
        metricValue?: number | null;
        metricName?: string | null;
        userAttributes: AchievementResponseUserAttributesItem.Raw[];
        eventAttribute?: AchievementResponseEventAttribute.Raw | null;
        eventAttributes?: AchievementResponseEventAttributesItem.Raw[] | null;
    }
}
