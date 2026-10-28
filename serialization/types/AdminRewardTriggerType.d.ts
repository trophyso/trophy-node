import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminRewardTriggerType: core.serialization.Schema<serializers.AdminRewardTriggerType.Raw, TrophyApi.AdminRewardTriggerType>;
export declare namespace AdminRewardTriggerType {
    type Raw = "metric" | "achievement" | "streak" | "leaderboard";
}
