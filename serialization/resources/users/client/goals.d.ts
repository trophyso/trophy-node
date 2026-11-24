import type * as TrophyApi from "../../../../api/index";
import * as core from "../../../../core";
import * as serializers from "../../../index";
export declare const Response: core.serialization.Schema<serializers.users.goals.Response.Raw, TrophyApi.GoalResponse[]>;
export declare namespace Response {
    type Raw = serializers.GoalResponse.Raw[];
}
