import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminFontFamily } from "./AdminFontFamily";
import { AdminSettingsBrandingAppIcon } from "./AdminSettingsBrandingAppIcon";
import { AdminSettingsBrandingLogo } from "./AdminSettingsBrandingLogo";
export declare const AdminSettingsBranding: core.serialization.ObjectSchema<serializers.AdminSettingsBranding.Raw, TrophyApi.AdminSettingsBranding>;
export declare namespace AdminSettingsBranding {
    interface Raw {
        appName: string;
        appUrl: string;
        brandColor: string;
        font: AdminFontFamily.Raw;
        logo?: AdminSettingsBrandingLogo.Raw | null;
        appIcon?: AdminSettingsBrandingAppIcon.Raw | null;
    }
}
