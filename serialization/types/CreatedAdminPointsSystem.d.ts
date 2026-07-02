import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AdminPointsBoost } from "./AdminPointsBoost";
import { AdminPointsLevel } from "./AdminPointsLevel";
import { AdminPointsSystem } from "./AdminPointsSystem";
import { AdminPointsTrigger } from "./AdminPointsTrigger";
export declare const CreatedAdminPointsSystem: core.serialization.ObjectSchema<serializers.CreatedAdminPointsSystem.Raw, TrophyApi.CreatedAdminPointsSystem>;
export declare namespace CreatedAdminPointsSystem {
    interface Raw extends AdminPointsSystem.Raw {
        levels?: AdminPointsLevel.Raw[] | null;
        boosts?: AdminPointsBoost.Raw[] | null;
        triggers?: AdminPointsTrigger.Raw[] | null;
    }
}
