import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAchievementRequestItemStatus: core.serialization.Schema<serializers.UpdateAchievementRequestItemStatus.Raw, TrophyApi.UpdateAchievementRequestItemStatus>;
export declare namespace UpdateAchievementRequestItemStatus {
    type Raw = "active" | "inactive" | "locked";
}
