export interface ServerOptions {
    identifier: string;
    serverId: number | number[];
    region: 'EU' | 'US';
    state?: any[];
    playerRefreshing?: boolean;
    radioRefreshing?: boolean;
    extendedEventRefreshing?: boolean;
    intents: string[];
}
export interface FetchedServer {
    rawName: string;
    name: string;
    region: 'EU' | 'US';
    sid: number[];
}
export interface FarmingSim25Server {
    identifier: string;
    serverId: number[];
    region: 'EU' | 'US';
    intervals: FarmingSim25ServerIntervals;
    flags: string[];
    state: any[];
    status: 'STOPPING' | 'MAINTENANCE' | 'UPDATING' | 'STOPPED' | 'STARTING' | 'RUNNING' | 'SUSPENDED' | 'UNKNOWN';
    players: string[];
    frequencies: number[];
    intents: string[];
}
interface FarmingSim25ServerIntervals {
    playerRefreshing?: {
        enabled: boolean;
        interval?: NodeJS.Timeout;
    };
    radioRefreshing?: {
        enabled: boolean;
        interval?: NodeJS.Timeout;
    };
    extendedEventRefreshing?: {
        enabled: boolean;
        interval?: NodeJS.Timeout;
    };
}
export interface CommandRequest {
    identifier: string;
    command: string;
    timestamp?: string;
    resolve: (value: CommandResponse) => void;
    reject: (reason: any) => void;
    timeout?: ReturnType<typeof setTimeout>;
}
export interface CommandResponse {
    ok: boolean;
    response?: string;
    error?: string;
}
export interface FarmingSim25ServerInformation {
    Hostname: string;
    MaxPlayers: number;
    Players: number;
    Queued: number;
    Joining: number;
    EntityCount: number;
    GameTime: string;
    Uptime: number;
    Map: 'Procedural Map';
    Framerate: number;
    Memory: number;
    Collections: number;
    NetworkIn: number;
    NetworkOut: number;
    Restarting: boolean;
    SaveCreatedTime: string;
}
export interface FarmingSim25ServerAdvancedInformation {
    name: string;
    platforms: string[];
    ipPort: string;
    permissions: FarmingSim25ServerAdvancedInformationPermissions;
    backups: FarmingSim25ServerAdvancedInformationBackups[];
    restarts: FarmingSim25ServerAdvancedInformationRestarts[];
}
interface FarmingSim25ServerAdvancedInformationPermissions {
    username: string;
    created: Date;
    owner: boolean;
}
interface FarmingSim25ServerAdvancedInformationBackups {
    id: number;
    size: number;
    created: Date;
    auto: boolean;
}
interface FarmingSim25ServerAdvancedInformationRestarts {
    id: number;
    schedule: {
        type: 'weekly' | 'monthly' | 'daily';
        timezone: string;
        day?: string;
        dayOfMonth?: number;
        time: string;
    };
    nextRun: Date;
}
export {};
