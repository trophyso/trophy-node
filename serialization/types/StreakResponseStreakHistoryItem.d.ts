import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StreakResponseStreakHistoryItem: core.serialization.ObjectSchema<serializers.StreakResponseStreakHistoryItem.Raw, TrophyApi.StreakResponseStreakHistoryItem>;
export declare namespace StreakResponseStreakHistoryItem {
    interface Raw {
        periodStart: string;
        periodEnd: string;
        length: number;
        usedFreeze?: boolean | null;
    }
}
