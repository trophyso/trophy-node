import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminAttribute } from "./AdminAttribute";
export declare const ListAttributesResponse: core.serialization.Schema<serializers.ListAttributesResponse.Raw, TrophyApi.ListAttributesResponse>;
export declare namespace ListAttributesResponse {
    type Raw = AdminAttribute.Raw[];
}
