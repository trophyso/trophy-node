import type * as TrophyApi from "../../../../../../../../index";
/**
 * @example
 *     {
 *         pauses: [{
 *                 userId: "user-123",
 *                 start: "2026-08-20",
 *                 end: "2026-08-27"
 *             }, {
 *                 userId: "user-456",
 *                 start: "2026-09-01",
 *                 end: "2026-09-07"
 *             }]
 *     }
 */
export interface CreateStreakPausesRequest {
    /** Array of pauses to create. Maximum 100 pauses per request. */
    pauses: TrophyApi.admin.streaks.CreateStreakPausesRequestPausesItem[];
}
