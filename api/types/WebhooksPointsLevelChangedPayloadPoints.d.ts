import type * as TrophyApi from "../index";
/**
 * The points system in which the level changed.
 */
export interface WebhooksPointsLevelChangedPayloadPoints extends TrophyApi.PointsResponse {
    /** The user's total points in this system. */
    total: number;
}
