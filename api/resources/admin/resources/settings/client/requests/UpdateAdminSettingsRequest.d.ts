import type * as TrophyApi from "../../../../../../index";
/**
 * @example
 *     {
 *         branding: {
 *             appName: "Trophy",
 *             appUrl: "https://app.example.com",
 *             brandColor: "#1a2b3c",
 *             logo: {
 *                 url: "https://cdn.example.com/logo.png"
 *             }
 *         },
 *         experimentation: {
 *             controlRatio: 10,
 *             userActivationWindow: 14
 *         },
 *         aggregationPeriod: "weekly"
 *     }
 *
 * @example
 *     {}
 */
export interface UpdateAdminSettingsRequest {
    branding?: TrophyApi.UpdateAdminSettingsBranding;
    experimentation?: TrophyApi.UpdateAdminSettingsExperimentation;
    aggregationPeriod?: TrophyApi.AdminAggregationPeriod;
}
