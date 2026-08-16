import type * as TrophyApi from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { CreateStreakPausesRequestPausesItem } from "../../types/CreateStreakPausesRequestPausesItem";
export declare const CreateStreakPausesRequest: core.serialization.Schema<serializers.admin.streaks.CreateStreakPausesRequest.Raw, TrophyApi.admin.streaks.CreateStreakPausesRequest>;
export declare namespace CreateStreakPausesRequest {
    interface Raw {
        pauses: CreateStreakPausesRequestPausesItem.Raw[];
    }
}
