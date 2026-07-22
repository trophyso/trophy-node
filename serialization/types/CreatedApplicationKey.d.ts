import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreatedApplicationKey: core.serialization.ObjectSchema<serializers.CreatedApplicationKey.Raw, TrophyApi.CreatedApplicationKey>;
export declare namespace CreatedApplicationKey {
    interface Raw {
        id: string;
        userId: string;
        key: string;
        prefix: string;
    }
}
