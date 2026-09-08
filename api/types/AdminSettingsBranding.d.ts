import type * as TrophyApi from "../index";
/**
 * Organization branding settings.
 */
export interface AdminSettingsBranding {
    /** The name of the app or platform. */
    appName: string;
    /** The URL of the app or platform. */
    appUrl: string;
    /** Primary brand color as hex (`#RGB` or `#RRGGBB`), `rgb(r,g,b)`, or `rgba(r,g,b,a)`. */
    brandColor: string;
    font: TrophyApi.AdminFontFamily;
    /** Company logo used in emails, or `null` if none is set. */
    logo?: TrophyApi.AdminSettingsBrandingLogo;
    /** App icon used in push notification previews, or `null` if none is set. */
    appIcon?: TrophyApi.AdminSettingsBrandingAppIcon;
}
