import type { FarmingSim25Server } from '../servers/interfaces';
import type { WSMessage } from './interfaces';
import { RCEEvent } from '../constants';
import type RCEManager from '../Manager';

export default class ServiceSensorHandler {
  public static handle(
    manager: RCEManager,
    message: WSMessage,
    server: FarmingSim25Server
  ) {
    const { cpuTotal, memory } = message.payload.data.serviceSensors;

    manager.events.emit(RCEEvent.ServiceSensor, {
      server,
      cpuPercentage: Number(cpuTotal.toFixed(2)),
      memoryUsed: Number(memory.used),
    });
  }
}
