import type * as TrophyApi from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { UpsertedUser } from "../../../../types/UpsertedUser";
export declare const RewardsRedeemRequest: core.serialization.Schema<serializers.RewardsRedeemRequest.Raw, TrophyApi.RewardsRedeemRequest>;
export declare namespace RewardsRedeemRequest {
    interface Raw {
        user: UpsertedUser.Raw;
    }
}
