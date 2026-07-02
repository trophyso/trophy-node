import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAttributeRequestItemType: core.serialization.Schema<serializers.CreateAttributeRequestItemType.Raw, TrophyApi.CreateAttributeRequestItemType>;
export declare namespace CreateAttributeRequestItemType {
    type Raw = "user" | "event";
}
