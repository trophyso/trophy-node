/** The attribute type. */
export declare const AdminAttributeType: {
    readonly User: "user";
    readonly Event: "event";
};
export type AdminAttributeType = (typeof AdminAttributeType)[keyof typeof AdminAttributeType];
