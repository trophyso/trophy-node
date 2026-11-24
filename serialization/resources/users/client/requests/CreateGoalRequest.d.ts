import type * as TrophyApi from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { GoalCompletion } from "../../../../types/GoalCompletion";
import { GoalStepRequest } from "../../../../types/GoalStepRequest";
export declare const CreateGoalRequest: core.serialization.Schema<serializers.CreateGoalRequest.Raw, TrophyApi.CreateGoalRequest>;
export declare namespace CreateGoalRequest {
    interface Raw {
        key: string;
        parent?: string | null;
        label?: string | null;
        completion?: GoalCompletion.Raw | null;
        dueAt?: string | null;
        completedAt?: string | null;
        metric?: string | null;
        target?: number | null;
        start?: string | null;
        steps?: GoalStepRequest.Raw[] | null;
    }
}
