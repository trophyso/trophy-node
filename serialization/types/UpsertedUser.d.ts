import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdatedUser } from "./UpdatedUser";
export declare const UpsertedUser: core.serialization.ObjectSchema<serializers.UpsertedUser.Raw, TrophyApi.UpsertedUser>;
export declare namespace UpsertedUser {
    interface Raw extends UpdatedUser.Raw {
        id: string;
    }
}
