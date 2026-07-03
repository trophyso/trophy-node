import type * as TrophyApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { RestoreStreaksRequestUsersItem } from "../../types/RestoreStreaksRequestUsersItem";
export declare const RestoreStreaksRequest: core.serialization.Schema<serializers.admin.RestoreStreaksRequest.Raw, TrophyApi.admin.RestoreStreaksRequest>;
export declare namespace RestoreStreaksRequest {
    interface Raw {
        users: RestoreStreaksRequestUsersItem.Raw[];
    }
}
