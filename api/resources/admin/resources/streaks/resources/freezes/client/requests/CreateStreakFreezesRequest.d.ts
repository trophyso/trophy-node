import type * as TrophyApi from "../../../../../../../../index";
/**
 * @example
 *     {
 *         freezes: [{
 *                 userId: "user-123"
 *             }, {
 *                 userId: "user-456"
 *             }, {
 *                 userId: "user-123"
 *             }]
 *     }
 */
export interface CreateStreakFreezesRequest {
    /** Array of freezes to create. Maximum 100 freezes per request. */
    freezes: TrophyApi.admin.streaks.CreateStreakFreezesRequestFreezesItem[];
}
