import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminLeaderboardRankBy } from "./AdminLeaderboardRankBy";
import { AdminLeaderboardRunUnit } from "./AdminLeaderboardRunUnit";
import { AdminLeaderboardStatus } from "./AdminLeaderboardStatus";
export declare const AdminLeaderboard: core.serialization.ObjectSchema<serializers.AdminLeaderboard.Raw, TrophyApi.AdminLeaderboard>;
export declare namespace AdminLeaderboard {
    interface Raw {
        id: string;
        name: string;
        key: string;
        description?: string | null;
        status: AdminLeaderboardStatus.Raw;
        rankBy: AdminLeaderboardRankBy.Raw;
        metricId?: string | null;
        pointsSystemId?: string | null;
        maxParticipants?: number | null;
        start: string;
        end?: string | null;
        startTime?: string | null;
        endTime?: string | null;
        breakdownAttributes: string[];
        runUnit?: AdminLeaderboardRunUnit.Raw | null;
        runInterval?: number | null;
    }
}
