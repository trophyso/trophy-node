import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAdminSettingsBrandingAppIcon: core.serialization.ObjectSchema<serializers.UpdateAdminSettingsBrandingAppIcon.Raw, TrophyApi.UpdateAdminSettingsBrandingAppIcon>;
export declare namespace UpdateAdminSettingsBrandingAppIcon {
    interface Raw {
        url: string;
    }
}
