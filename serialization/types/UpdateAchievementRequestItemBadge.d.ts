import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAchievementRequestItemBadge: core.serialization.ObjectSchema<serializers.UpdateAchievementRequestItemBadge.Raw, TrophyApi.UpdateAchievementRequestItemBadge>;
export declare namespace UpdateAchievementRequestItemBadge {
    interface Raw {
        url: string;
    }
}
