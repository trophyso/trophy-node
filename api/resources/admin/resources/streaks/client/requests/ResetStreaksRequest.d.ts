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
export interface ResetStreaksRequest {
    /** Array of users to reset streaks for. Maximum 100 users per request. */
    users: TrophyApi.admin.ResetStreaksRequestUsersItem[];
}
