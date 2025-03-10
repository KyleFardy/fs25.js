import type { FarmingSim25Server } from '../servers/interfaces';
import type { WSMessage } from './interfaces';
import type RCEManager from '../Manager';
export default class ConsoleMessagesHandler {
    static handle(manager: RCEManager, message: WSMessage, server: FarmingSim25Server): void;
    private static getKill;
}
