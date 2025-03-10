import type { FarmingSim25Server } from '../servers/interfaces';
import type RCEManager from '../Manager';
import { RCEEvent } from '../constants';

export default class ServerUtils {
  public static error(
    manager: RCEManager,
    error: string,
    server?: FarmingSim25Server
  ) {
    manager.events.emit(RCEEvent.Error, { error, server });
  }

  public static async setReady(
    manager: RCEManager,
    server: FarmingSim25Server,
    ready: boolean
  ) {
    if (ready) {
      server.flags.push('READY');
    } else {
      server.flags = server.flags.filter((flag) => flag !== 'READY');
    }

    await this.sleep(3_000);

    manager.servers.update(server);
    await manager.servers.command(server.identifier, 'save');
    manager.logger.info(
      `[${server.identifier}] Server ${ready ? 'Ready' : 'Unready'}`
    );

    manager.events.emit(RCEEvent.ServerReady, { server, ready });
  }

  private static sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
