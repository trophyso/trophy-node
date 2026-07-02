import type * as TrophyApi from "../index";
/**
 * A points level to create.
 */
export interface CreatePointsLevelRequestItem {
    /** The name of the level. */
    name: string;
    /** A unique key for the level. Only alphanumeric characters, hyphens, and underscores are permitted. */
    key: string;
    /** The threshold points value for the level. */
    points: number;
    /** An optional description of the level. */
    description?: string;
    /** An optional badge for the level. */
    badge?: TrophyApi.CreatePointsLevelRequestItemBadge;
}
