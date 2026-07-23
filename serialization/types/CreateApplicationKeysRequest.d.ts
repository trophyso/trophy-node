import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreateApplicationKeyRequestItem } from "./CreateApplicationKeyRequestItem";
export declare const CreateApplicationKeysRequest: core.serialization.Schema<serializers.CreateApplicationKeysRequest.Raw, TrophyApi.CreateApplicationKeysRequest>;
export declare namespace CreateApplicationKeysRequest {
    type Raw = CreateApplicationKeyRequestItem.Raw[];
}
