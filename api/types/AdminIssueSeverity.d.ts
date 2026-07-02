/** The severity level of the issue. */
export declare const AdminIssueSeverity: {
    readonly Error: "error";
    readonly Warning: "warning";
};
export type AdminIssueSeverity = (typeof AdminIssueSeverity)[keyof typeof AdminIssueSeverity];
