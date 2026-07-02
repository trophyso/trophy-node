import type * as TrophyApi from "../index";
/**
 * An attribute to create.
 */
export interface CreateAttributeRequestItem {
    /** The attribute name. */
    name: string;
    /** The attribute key. Only alphanumeric characters, hyphens, and underscores are permitted. */
    key: string;
    /** The attribute type. */
    type: TrophyApi.CreateAttributeRequestItemType;
}
