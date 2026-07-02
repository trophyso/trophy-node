import type * as TrophyApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import type * as serializers from "../../../../../../../index";
export declare const CreateStreakFreezesRequestFreezesItem: core.serialization.ObjectSchema<serializers.admin.streaks.CreateStreakFreezesRequestFreezesItem.Raw, TrophyApi.admin.streaks.CreateStreakFreezesRequestFreezesItem>;
export declare namespace CreateStreakFreezesRequestFreezesItem {
    interface Raw {
        userId: string;
    }
}
