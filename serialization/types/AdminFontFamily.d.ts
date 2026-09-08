import type * as TrophyApi from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AdminFontFamily: core.serialization.Schema<serializers.AdminFontFamily.Raw, TrophyApi.AdminFontFamily>;
export declare namespace AdminFontFamily {
    type Raw = "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE";
}
