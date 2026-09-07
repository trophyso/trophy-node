import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAchievementRequestItemStatus: core.serialization.Schema<serializers.CreateAchievementRequestItemStatus.Raw, TrophyApi.CreateAchievementRequestItemStatus>;
export declare namespace CreateAchievementRequestItemStatus {
    type Raw = "active" | "inactive" | "locked";
}
