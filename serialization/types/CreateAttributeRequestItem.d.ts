import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateAttributeRequestItemType } from "./CreateAttributeRequestItemType";
export declare const CreateAttributeRequestItem: core.serialization.ObjectSchema<serializers.CreateAttributeRequestItem.Raw, TrophyApi.CreateAttributeRequestItem>;
export declare namespace CreateAttributeRequestItem {
    interface Raw {
        name: string;
        key: string;
        type: CreateAttributeRequestItemType.Raw;
    }
}
