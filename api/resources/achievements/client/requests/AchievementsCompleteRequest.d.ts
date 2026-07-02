import type * as TrophyApi from "../../../../index";
/**
 * @example
 *     {
 *         user: {
 *             email: "user@example.com",
 *             tz: "Europe/London",
 *             id: "user-id"
 *         }
 *     }
 */
export interface AchievementsCompleteRequest {
    /** The user that completed the achievement. */
    user: TrophyApi.UpsertedUser;
}
