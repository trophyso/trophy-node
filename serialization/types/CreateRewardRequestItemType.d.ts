import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateRewardRequestItemType: core.serialization.Schema<serializers.CreateRewardRequestItemType.Raw, TrophyApi.CreateRewardRequestItemType>;
export declare namespace CreateRewardRequestItemType {
    type Raw = "points" | "custom";
}
