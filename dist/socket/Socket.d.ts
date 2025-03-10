import type GPortalAuth from '../auth/Auth';
import type { FarmingSim25Server } from '../servers/interfaces';
import type RCEManager from '../Manager';
export default class GPortalSocket {
    private _manager;
    private _auth;
    private _socket;
    private _connectionAttempts;
    private _heartbeatInterval;
    private _requests;
    constructor(manager: RCEManager, auth: GPortalAuth);
    close(): void;
    connect(resubsctibe?: boolean): void;
    removeServer(server: FarmingSim25Server): void;
    addServer(server: FarmingSim25Server): void;
    private authenticate;
}
