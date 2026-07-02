/** A notification delivery channel. */
export declare const NotificationChannel: {
    readonly Email: "email";
    readonly Push: "push";
};
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];
