import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateRewardRequestItemStatus: core.serialization.Schema<serializers.CreateRewardRequestItemStatus.Raw, TrophyApi.CreateRewardRequestItemStatus>;
export declare namespace CreateRewardRequestItemStatus {
    type Raw = "active" | "inactive";
}
