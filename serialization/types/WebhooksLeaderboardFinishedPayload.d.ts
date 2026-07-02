import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardResponseWithRankings } from "./LeaderboardResponseWithRankings";
export declare const WebhooksLeaderboardFinishedPayload: core.serialization.ObjectSchema<serializers.WebhooksLeaderboardFinishedPayload.Raw, TrophyApi.WebhooksLeaderboardFinishedPayload>;
export declare namespace WebhooksLeaderboardFinishedPayload {
    interface Raw {
        type: "leaderboard.finished";
        leaderboard: LeaderboardResponseWithRankings.Raw;
    }
}
