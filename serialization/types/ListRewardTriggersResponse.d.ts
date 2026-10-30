import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminRewardTrigger } from "./AdminRewardTrigger";
export declare const ListRewardTriggersResponse: core.serialization.Schema<serializers.ListRewardTriggersResponse.Raw, TrophyApi.ListRewardTriggersResponse>;
export declare namespace ListRewardTriggersResponse {
    type Raw = AdminRewardTrigger.Raw[];
}
