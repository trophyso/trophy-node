/**
 * @example
 *     {
 *         userAttributes: "plan-type:premium,region:us-east"
 *     }
 */
export interface PointsSummaryRequest {
    /** Optional colon-delimited user attribute filters in the format attribute:value,attribute:value. Only users matching ALL specified attributes will be included in the points breakdown. */
    userAttributes?: string;
}
