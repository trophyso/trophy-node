import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminSettingsExperimentation: core.serialization.ObjectSchema<serializers.AdminSettingsExperimentation.Raw, TrophyApi.AdminSettingsExperimentation>;
export declare namespace AdminSettingsExperimentation {
    interface Raw {
        controlRatio: number;
        userActivationWindow: number;
    }
}
