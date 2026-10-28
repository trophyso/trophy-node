import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateRewardTriggerRequestItemStatus: core.serialization.Schema<serializers.CreateRewardTriggerRequestItemStatus.Raw, TrophyApi.CreateRewardTriggerRequestItemStatus>;
export declare namespace CreateRewardTriggerRequestItemStatus {
    type Raw = "active" | "inactive";
}
