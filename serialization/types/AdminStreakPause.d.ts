import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminStreakPauseStatus } from "./AdminStreakPauseStatus";
export declare const AdminStreakPause: core.serialization.ObjectSchema<serializers.AdminStreakPause.Raw, TrophyApi.AdminStreakPause>;
export declare namespace AdminStreakPause {
    interface Raw {
        id: string;
        userId: string;
        start: string;
        end: string;
        status: AdminStreakPauseStatus.Raw;
    }
}
