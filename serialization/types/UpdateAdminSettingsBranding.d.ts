import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminFontFamily } from "./AdminFontFamily";
import { UpdateAdminSettingsBrandingAppIcon } from "./UpdateAdminSettingsBrandingAppIcon";
import { UpdateAdminSettingsBrandingLogo } from "./UpdateAdminSettingsBrandingLogo";
export declare const UpdateAdminSettingsBranding: core.serialization.ObjectSchema<serializers.UpdateAdminSettingsBranding.Raw, TrophyApi.UpdateAdminSettingsBranding>;
export declare namespace UpdateAdminSettingsBranding {
    interface Raw {
        appName?: string | null;
        appUrl?: string | null;
        brandColor?: string | null;
        font?: AdminFontFamily.Raw | null;
        logo?: UpdateAdminSettingsBrandingLogo.Raw | null;
        appIcon?: UpdateAdminSettingsBrandingAppIcon.Raw | null;
    }
}
