import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { GoalCompletion } from "./GoalCompletion";
import { GoalStatus } from "./GoalStatus";
export declare const GoalResponse: core.serialization.ObjectSchema<serializers.GoalResponse.Raw, TrophyApi.GoalResponse>;
export declare namespace GoalResponse {
    interface Raw {
        id: string;
        key: string;
        label?: string | null;
        completion: GoalCompletion.Raw;
        dueAt?: string | null;
        completedAt?: string | null;
        status: GoalStatus.Raw;
        steps: serializers.GoalResponse.Raw[];
        done: number;
        total: number;
        metric?: string | null;
        target?: number | null;
        start?: string | null;
        current?: number | null;
        created: string;
        updated: string;
    }
}
