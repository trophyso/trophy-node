import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminEnvironment } from "./AdminEnvironment";
export declare const ListEnvironmentsResponse: core.serialization.Schema<serializers.ListEnvironmentsResponse.Raw, TrophyApi.ListEnvironmentsResponse>;
export declare namespace ListEnvironmentsResponse {
    type Raw = AdminEnvironment.Raw[];
}
