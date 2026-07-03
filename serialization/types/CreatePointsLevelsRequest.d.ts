import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { CreatePointsLevelRequestItem } from "./CreatePointsLevelRequestItem";
export declare const CreatePointsLevelsRequest: core.serialization.Schema<serializers.CreatePointsLevelsRequest.Raw, TrophyApi.CreatePointsLevelsRequest>;
export declare namespace CreatePointsLevelsRequest {
    type Raw = CreatePointsLevelRequestItem.Raw[];
}
