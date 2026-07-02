import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeletedResource: core.serialization.ObjectSchema<serializers.DeletedResource.Raw, TrophyApi.DeletedResource>;
export declare namespace DeletedResource {
    interface Raw {
        id: string;
    }
}
