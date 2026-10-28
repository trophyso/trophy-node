import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateRewardTriggerRequestItemType: core.serialization.Schema<serializers.CreateRewardTriggerRequestItemType.Raw, TrophyApi.CreateRewardTriggerRequestItemType>;
export declare namespace CreateRewardTriggerRequestItemType {
    type Raw = "metric" | "achievement" | "streak" | "leaderboard";
}
