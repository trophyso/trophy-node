import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAdminSettingsExperimentation: core.serialization.ObjectSchema<serializers.UpdateAdminSettingsExperimentation.Raw, TrophyApi.UpdateAdminSettingsExperimentation>;
export declare namespace UpdateAdminSettingsExperimentation {
    interface Raw {
        controlRatio?: number | null;
        userActivationWindow?: number | null;
    }
}
