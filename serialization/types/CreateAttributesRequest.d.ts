import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateAttributeRequestItem } from "./CreateAttributeRequestItem";
export declare const CreateAttributesRequest: core.serialization.Schema<serializers.CreateAttributesRequest.Raw, TrophyApi.CreateAttributesRequest>;
export declare namespace CreateAttributesRequest {
    type Raw = CreateAttributeRequestItem.Raw[];
}
