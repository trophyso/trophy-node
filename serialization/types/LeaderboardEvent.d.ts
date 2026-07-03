import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LeaderboardEvent: core.serialization.ObjectSchema<serializers.LeaderboardEvent.Raw, TrophyApi.LeaderboardEvent>;
export declare namespace LeaderboardEvent {
    interface Raw {
        date: string;
        timestamp: string;
        previousRank?: number | null;
        rank?: number | null;
        previousValue?: number | null;
        value?: number | null;
    }
}
