import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ErrorBody: core.serialization.ObjectSchema<serializers.ErrorBody.Raw, TrophyApi.ErrorBody>;
export declare namespace ErrorBody {
    interface Raw {
        error: string;
    }
}
