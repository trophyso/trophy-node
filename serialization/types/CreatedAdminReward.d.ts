import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminReward } from "./AdminReward";
import { AdminRewardTrigger } from "./AdminRewardTrigger";
export declare const CreatedAdminReward: core.serialization.ObjectSchema<serializers.CreatedAdminReward.Raw, TrophyApi.CreatedAdminReward>;
export declare namespace CreatedAdminReward {
    interface Raw extends AdminReward.Raw {
        triggers?: AdminRewardTrigger.Raw[] | null;
    }
}
