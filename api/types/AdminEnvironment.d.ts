/**
 * An active environment in the organisation.
 */
export interface AdminEnvironment {
    /** Human-readable name for the environment. */
    name: string;
    /** Machine-readable identifier for the environment. */
    key: string;
    /** Environment precedence. Lower numbers take priority. Production is always 1. */
    priority: number;
}
