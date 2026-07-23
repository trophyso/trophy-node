import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateApplicationKeyRequestItem: core.serialization.ObjectSchema<serializers.CreateApplicationKeyRequestItem.Raw, TrophyApi.CreateApplicationKeyRequestItem>;
export declare namespace CreateApplicationKeyRequestItem {
    interface Raw {
        userId: string;
    }
}
