/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as TrophyApi from "../../api";
import * as core from "../../core";
export declare const UpsertedUser: core.serialization.ObjectSchema<serializers.UpsertedUser.Raw, TrophyApi.UpsertedUser>;
export declare namespace UpsertedUser {
    interface Raw extends serializers.UpdatedUser.Raw {
        id: string;
    }
}
