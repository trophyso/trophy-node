import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RedeemedReward: core.serialization.ObjectSchema<serializers.RedeemedReward.Raw, TrophyApi.RedeemedReward>;
export declare namespace RedeemedReward {
    interface Raw {
        id: string;
        awardedAt: string;
        redeemedAt: string;
    }
}
