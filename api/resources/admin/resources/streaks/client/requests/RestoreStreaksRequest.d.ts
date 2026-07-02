import type * as TrophyApi from "../../../../../../index";
/**
 * @example
 *     {
 *         users: [{
 *                 id: "user-123"
 *             }, {
 *                 id: "user-456"
 *             }]
 *     }
 */
export interface RestoreStreaksRequest {
    /** Array of users to restore streaks for. Maximum 100 users per request. */
    users: TrophyApi.admin.RestoreStreaksRequestUsersItem[];
}
