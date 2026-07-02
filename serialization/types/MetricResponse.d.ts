import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { UserAchievementResponse } from "./UserAchievementResponse";
export declare const MetricResponse: core.serialization.ObjectSchema<serializers.MetricResponse.Raw, TrophyApi.MetricResponse>;
export declare namespace MetricResponse {
    interface Raw {
        id: string;
        key: string;
        name: string;
        current: number;
        achievements: UserAchievementResponse.Raw[];
    }
}
