import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { GoalCompletion } from "./GoalCompletion";
import { GoalResponseStatus } from "./GoalResponseStatus";
export declare const GoalResponse: core.serialization.ObjectSchema<serializers.GoalResponse.Raw, TrophyApi.GoalResponse>;
export declare namespace GoalResponse {
    interface Raw {
        key: string;
        label?: string | null;
        completion: GoalCompletion.Raw;
        dueAt?: string | null;
        completedAt?: string | null;
        status: GoalResponseStatus.Raw;
        steps?: serializers.GoalResponse.Raw[] | null;
        done?: number | null;
        total?: number | null;
        metric?: string | null;
        target?: number | null;
        start?: string | null;
        current?: number | null;
    }
}
