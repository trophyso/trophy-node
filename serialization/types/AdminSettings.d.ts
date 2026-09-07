import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAggregationPeriod } from "./AdminAggregationPeriod";
import { AdminSettingsBranding } from "./AdminSettingsBranding";
import { AdminSettingsExperimentation } from "./AdminSettingsExperimentation";
export declare const AdminSettings: core.serialization.ObjectSchema<serializers.AdminSettings.Raw, TrophyApi.AdminSettings>;
export declare namespace AdminSettings {
    interface Raw {
        branding: AdminSettingsBranding.Raw;
        experimentation: AdminSettingsExperimentation.Raw;
        aggregationPeriod: AdminAggregationPeriod.Raw;
    }
}
