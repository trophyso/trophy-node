import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BaseStreakResponse } from "./BaseStreakResponse";
import { StreakResponseStreakHistoryItem } from "./StreakResponseStreakHistoryItem";
export declare const StreakResponse: core.serialization.ObjectSchema<serializers.StreakResponse.Raw, TrophyApi.StreakResponse>;
export declare namespace StreakResponse {
    interface Raw extends BaseStreakResponse.Raw {
        extended?: string | null;
        streakHistory: StreakResponseStreakHistoryItem.Raw[];
    }
}
