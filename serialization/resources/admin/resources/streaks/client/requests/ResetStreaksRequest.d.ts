import type * as TrophyApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { ResetStreaksRequestUsersItem } from "../../types/ResetStreaksRequestUsersItem";
export declare const ResetStreaksRequest: core.serialization.Schema<serializers.admin.ResetStreaksRequest.Raw, TrophyApi.admin.ResetStreaksRequest>;
export declare namespace ResetStreaksRequest {
    interface Raw {
        users: ResetStreaksRequestUsersItem.Raw[];
    }
}
