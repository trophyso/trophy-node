/** The lifecycle status of the tenant. */
export declare const AdminTenantStatus: {
    readonly Active: "active";
    readonly Archived: "archived";
};
export type AdminTenantStatus = (typeof AdminTenantStatus)[keyof typeof AdminTenantStatus];
