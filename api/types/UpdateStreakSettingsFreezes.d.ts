/**
 * Replacement freeze configuration. `startCount` and `maxCount` are required. Auto-earn is a pair: both `autoEarnInterval` and `autoEarnAmount` must be set to enable auto-earn, or both omitted/`null` to disable it.
 */
export interface UpdateStreakSettingsFreezes {
    /** Number of freezes new users start with. */
    startCount: number;
    /** Maximum number of freezes a user can have. Must be greater than or equal to `startCount`. */
    maxCount: number;
    /** Days between auto-earned freezes. */
    autoEarnInterval?: number;
    /** Freezes earned per interval. */
    autoEarnAmount?: number;
}
