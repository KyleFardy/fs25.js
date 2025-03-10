import type { FarmingSim25Server } from '../servers/interfaces';
import type RCEManager from '../Manager';
export default class ServerUtils {
    static error(manager: RCEManager, error: string, server?: FarmingSim25Server): void;
    static setReady(manager: RCEManager, server: FarmingSim25Server, ready: boolean): Promise<void>;
    private static sleep;
}
