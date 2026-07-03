import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardResponseWithRankings } from "./LeaderboardResponseWithRankings";
export declare const WebhooksLeaderboardStartedPayload: core.serialization.ObjectSchema<serializers.WebhooksLeaderboardStartedPayload.Raw, TrophyApi.WebhooksLeaderboardStartedPayload>;
export declare namespace WebhooksLeaderboardStartedPayload {
    interface Raw {
        type: "leaderboard.started";
        leaderboard: LeaderboardResponseWithRankings.Raw;
    }
}
