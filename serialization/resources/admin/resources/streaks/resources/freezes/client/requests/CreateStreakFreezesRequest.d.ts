import type * as TrophyApi from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { CreateStreakFreezesRequestFreezesItem } from "../../types/CreateStreakFreezesRequestFreezesItem";
export declare const CreateStreakFreezesRequest: core.serialization.Schema<serializers.admin.streaks.CreateStreakFreezesRequest.Raw, TrophyApi.admin.streaks.CreateStreakFreezesRequest>;
export declare namespace CreateStreakFreezesRequest {
    interface Raw {
        freezes: CreateStreakFreezesRequestFreezesItem.Raw[];
    }
}
