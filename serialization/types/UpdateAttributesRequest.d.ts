import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UpdateAttributeRequestItem } from "./UpdateAttributeRequestItem";
export declare const UpdateAttributesRequest: core.serialization.Schema<serializers.UpdateAttributesRequest.Raw, TrophyApi.UpdateAttributesRequest>;
export declare namespace UpdateAttributesRequest {
    type Raw = UpdateAttributeRequestItem.Raw[];
}
