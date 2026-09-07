import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAchievementRequestItemBadge: core.serialization.ObjectSchema<serializers.CreateAchievementRequestItemBadge.Raw, TrophyApi.CreateAchievementRequestItemBadge>;
export declare namespace CreateAchievementRequestItemBadge {
    interface Raw {
        url: string;
    }
}
