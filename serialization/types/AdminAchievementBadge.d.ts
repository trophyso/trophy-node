import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminAchievementBadge: core.serialization.ObjectSchema<serializers.AdminAchievementBadge.Raw, TrophyApi.AdminAchievementBadge>;
export declare namespace AdminAchievementBadge {
    interface Raw {
        url: string;
    }
}
