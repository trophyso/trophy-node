import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LeaderboardResponseRankBy } from "./LeaderboardResponseRankBy";
import { LeaderboardResponseRunUnit } from "./LeaderboardResponseRunUnit";
export declare const LeaderboardResponse: core.serialization.ObjectSchema<serializers.LeaderboardResponse.Raw, TrophyApi.LeaderboardResponse>;
export declare namespace LeaderboardResponse {
    interface Raw {
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
        end?: string | null;
        maxParticipants?: number | null;
        runUnit?: LeaderboardResponseRunUnit.Raw | null;
        runInterval?: number | null;
    }
}
