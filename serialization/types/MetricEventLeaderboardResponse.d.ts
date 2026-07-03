import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardResponseRankBy } from "./LeaderboardResponseRankBy";
import { LeaderboardResponseRunUnit } from "./LeaderboardResponseRunUnit";
import { MetricEventLeaderboardResponseBreakdownAttributeValuesItem } from "./MetricEventLeaderboardResponseBreakdownAttributeValuesItem";
export declare const MetricEventLeaderboardResponse: core.serialization.ObjectSchema<serializers.MetricEventLeaderboardResponse.Raw, TrophyApi.MetricEventLeaderboardResponse>;
export declare namespace MetricEventLeaderboardResponse {
    interface Raw {
        end?: string | null;
        rank?: number | null;
        previousRank?: number | null;
        threshold: number;
        breakdownAttributeValue?: string | null;
        breakdownAttributeValues?: MetricEventLeaderboardResponseBreakdownAttributeValuesItem.Raw[] | null;
        id: string;
        name: string;
        key: string;
        rankBy: LeaderboardResponseRankBy.Raw;
        breakdownAttribute?: string | null;
        breakdownAttributes: string[];
        metricKey?: string | null;
        metricName?: string | null;
        pointsSystemKey?: string | null;
        pointsSystemName?: string | null;
        description?: string | null;
        start: string;
        maxParticipants?: number | null;
        runUnit?: LeaderboardResponseRunUnit.Raw | null;
        runInterval?: number | null;
    }
}
