import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BulkStreakResponseItem: core.serialization.ObjectSchema<serializers.BulkStreakResponseItem.Raw, TrophyApi.BulkStreakResponseItem>;
export declare namespace BulkStreakResponseItem {
    interface Raw {
        userId: string;
        streakLength: number;
        extended?: string | null;
    }
}
