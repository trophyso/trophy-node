import type * as TrophyApi from "../index";
/**
 * The organization's branding, experimentation, and aggregation settings.
 */
export interface AdminSettings {
    branding: TrophyApi.AdminSettingsBranding;
    experimentation: TrophyApi.AdminSettingsExperimentation;
    aggregationPeriod: TrophyApi.AdminAggregationPeriod;
}
