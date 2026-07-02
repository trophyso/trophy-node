import type * as TrophyApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const RestoreStreaksRequestUsersItem: core.serialization.ObjectSchema<serializers.admin.RestoreStreaksRequestUsersItem.Raw, TrophyApi.admin.RestoreStreaksRequestUsersItem>;
export declare namespace RestoreStreaksRequestUsersItem {
    interface Raw {
        id: string;
    }
}
