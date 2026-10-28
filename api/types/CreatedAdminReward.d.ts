import type * as TrophyApi from "../index";
/**
 * A reward returned from the creation endpoint. Extends AdminReward with the triggers created alongside it, present when triggers were included in the creation request.
 */
export interface CreatedAdminReward extends TrophyApi.AdminReward {
    /** Triggers created alongside the reward. Present when triggers were provided in the request. */
    triggers?: TrophyApi.AdminRewardTrigger[];
}
