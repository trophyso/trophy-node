import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminSettingsBrandingLogo: core.serialization.ObjectSchema<serializers.AdminSettingsBrandingLogo.Raw, TrophyApi.AdminSettingsBrandingLogo>;
export declare namespace AdminSettingsBrandingLogo {
    interface Raw {
        url: string;
    }
}
