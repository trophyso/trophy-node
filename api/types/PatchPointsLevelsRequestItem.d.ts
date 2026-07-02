import type * as TrophyApi from "../index";
export interface PatchPointsLevelsRequestItem {
    /** The UUID of the level to update. */
    id: string;
    /** The updated level name. */
    name?: string;
    /** The updated threshold points value. */
    points?: number;
    /** The updated level description. */
    description?: string;
    /** The updated badge, or `null` to clear it. */
    badge?: TrophyApi.PatchPointsLevelsRequestItemBadge;
}
