/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as TrophyApi from "../../../..";
/**
 * @example
 *     {
 *         user: {
 *             id: "18",
 *             email: "jk.rowling@harrypotter.com",
 *             tz: "Europe/London"
 *         },
 *         value: 750
 *     }
 */
export interface MetricsEventRequest {
    /** The user that triggered the event. */
    user: TrophyApi.EventRequestUser;
    /** The value to add to the user's current total for the given metric. */
    value: number;
}
