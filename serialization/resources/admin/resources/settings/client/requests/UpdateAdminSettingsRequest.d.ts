import type * as TrophyApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { AdminAggregationPeriod } from "../../../../../../types/AdminAggregationPeriod";
import { UpdateAdminSettingsBranding } from "../../../../../../types/UpdateAdminSettingsBranding";
import { UpdateAdminSettingsExperimentation } from "../../../../../../types/UpdateAdminSettingsExperimentation";
export declare const UpdateAdminSettingsRequest: core.serialization.Schema<serializers.admin.UpdateAdminSettingsRequest.Raw, TrophyApi.admin.UpdateAdminSettingsRequest>;
export declare namespace UpdateAdminSettingsRequest {
    interface Raw {
        branding?: UpdateAdminSettingsBranding.Raw | null;
        experimentation?: UpdateAdminSettingsExperimentation.Raw | null;
        aggregationPeriod?: AdminAggregationPeriod.Raw | null;
    }
}
