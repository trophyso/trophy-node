import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardEvent } from "./LeaderboardEvent";
import { UserLeaderboardResponse } from "./UserLeaderboardResponse";
export declare const UserLeaderboardResponseWithHistory: core.serialization.ObjectSchema<serializers.UserLeaderboardResponseWithHistory.Raw, TrophyApi.UserLeaderboardResponseWithHistory>;
export declare namespace UserLeaderboardResponseWithHistory {
    interface Raw extends UserLeaderboardResponse.Raw {
        history: LeaderboardEvent.Raw[];
    }
}
