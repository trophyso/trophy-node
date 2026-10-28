import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateRewardTriggersRequestItemType: core.serialization.Schema<serializers.UpdateRewardTriggersRequestItemType.Raw, TrophyApi.UpdateRewardTriggersRequestItemType>;
export declare namespace UpdateRewardTriggersRequestItemType {
    type Raw = "metric" | "achievement" | "streak" | "leaderboard";
}
