import type * as TrophyApi from "../index";
/**
 * Branding fields to update. Omitted fields stay as-is.
 */
export interface UpdateAdminSettingsBranding {
    /** The name of the app or platform. */
    appName?: string;
    /** The URL of the app or platform. */
    appUrl?: string;
    /** Primary brand color as hex (`#RGB` or `#RRGGBB`), `rgb(r,g,b)`, or `rgba(r,g,b,a)`. */
    brandColor?: string;
    font?: TrophyApi.AdminFontFamily;
    /** Company logo, or `null` to clear it. */
    logo?: TrophyApi.UpdateAdminSettingsBrandingLogo;
    /** App icon, or `null` to clear it. */
    appIcon?: TrophyApi.UpdateAdminSettingsBrandingAppIcon;
}
