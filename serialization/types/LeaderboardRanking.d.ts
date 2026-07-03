import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LeaderboardRanking: core.serialization.ObjectSchema<serializers.LeaderboardRanking.Raw, TrophyApi.LeaderboardRanking>;
export declare namespace LeaderboardRanking {
    interface Raw {
        userId: string;
        userName?: string | null;
        rank: number;
        value: number;
    }
}
