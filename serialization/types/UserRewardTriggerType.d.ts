import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UserRewardTriggerType: core.serialization.Schema<serializers.UserRewardTriggerType.Raw, TrophyApi.UserRewardTriggerType>;
export declare namespace UserRewardTriggerType {
    type Raw = "metric" | "achievement" | "streak" | "leaderboard";
}
