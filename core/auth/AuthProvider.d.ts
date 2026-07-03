import type { EndpointMetadata } from "../fetcher/EndpointMetadata";
import type { AuthRequest } from "./AuthRequest";
export interface AuthProvider {
    getAuthRequest(arg?: {
        endpointMetadata?: EndpointMetadata;
    }): Promise<AuthRequest>;
}
export declare function isAuthProvider(value: unknown): value is AuthProvider;
