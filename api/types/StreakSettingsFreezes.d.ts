/**
 * Organization streak freeze configuration. `null` on the parent object means freezes are disabled.
 */
export interface StreakSettingsFreezes {
    /** Number of freezes new users start with. */
    startCount: number;
    /** Maximum number of freezes a user can have. */
    maxCount: number;
    /** Days between auto-earned freezes. `null` when auto-earn is off. */
    autoEarnInterval?: number;
    /** Freezes earned per interval. `null` when auto-earn is off. */
    autoEarnAmount?: number;
}
