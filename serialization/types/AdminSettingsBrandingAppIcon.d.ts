import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminSettingsBrandingAppIcon: core.serialization.ObjectSchema<serializers.AdminSettingsBrandingAppIcon.Raw, TrophyApi.AdminSettingsBrandingAppIcon>;
export declare namespace AdminSettingsBrandingAppIcon {
    interface Raw {
        url: string;
    }
}
