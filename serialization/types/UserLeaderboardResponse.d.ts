import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardResponse } from "./LeaderboardResponse";
export declare const UserLeaderboardResponse: core.serialization.ObjectSchema<serializers.UserLeaderboardResponse.Raw, TrophyApi.UserLeaderboardResponse>;
export declare namespace UserLeaderboardResponse {
    interface Raw extends LeaderboardResponse.Raw {
        rank?: number | null;
        value?: number | null;
    }
}
