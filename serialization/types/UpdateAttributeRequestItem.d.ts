import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateAttributeRequestItem: core.serialization.ObjectSchema<serializers.UpdateAttributeRequestItem.Raw, TrophyApi.UpdateAttributeRequestItem>;
export declare namespace UpdateAttributeRequestItem {
    interface Raw {
        id: string;
        name?: string | null;
    }
}
