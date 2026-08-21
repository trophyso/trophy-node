import type * as TrophyApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import type * as serializers from "../../../../../../../index";
export declare const CreateStreakPausesRequestPausesItem: core.serialization.ObjectSchema<serializers.admin.streaks.CreateStreakPausesRequestPausesItem.Raw, TrophyApi.admin.streaks.CreateStreakPausesRequestPausesItem>;
export declare namespace CreateStreakPausesRequestPausesItem {
    interface Raw {
        userId: string;
        start: string;
        end: string;
    }
}
