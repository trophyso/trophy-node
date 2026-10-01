import type * as TrophyApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const ResetStreaksRequestUsersItem: core.serialization.ObjectSchema<serializers.admin.ResetStreaksRequestUsersItem.Raw, TrophyApi.admin.ResetStreaksRequestUsersItem>;
export declare namespace ResetStreaksRequestUsersItem {
    interface Raw {
        id: string;
    }
}
