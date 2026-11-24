import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { GoalCompletion } from "./GoalCompletion";
export declare const GoalStepRequest: core.serialization.ObjectSchema<serializers.GoalStepRequest.Raw, TrophyApi.GoalStepRequest>;
export declare namespace GoalStepRequest {
    interface Raw {
        key: string;
        label?: string | null;
        completion?: GoalCompletion.Raw | null;
        dueAt?: string | null;
        completed?: boolean | null;
        metric?: string | null;
        target?: number | null;
        start?: string | null;
    }
}
