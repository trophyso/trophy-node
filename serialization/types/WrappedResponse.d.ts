import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { User } from "./User";
import { WrappedActivity } from "./WrappedActivity";
export declare const WrappedResponse: core.serialization.ObjectSchema<serializers.WrappedResponse.Raw, TrophyApi.WrappedResponse>;
export declare namespace WrappedResponse {
    interface Raw {
        user: User.Raw;
        activity: WrappedActivity.Raw;
    }
}
