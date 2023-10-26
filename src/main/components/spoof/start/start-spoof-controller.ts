import { EventType } from '../../../ipc';
import StartSpoofUseCase from './start-spoof-use-case';

export default class StartSpoofController {
  constructor(private startSpoofUseCase: StartSpoofUseCase) {}

  async handle() {
    try {
      const message = await this.startSpoofUseCase.execute();
      return {
        response: EventType.START_SPOOF_RESPONSE,
        data: message,
      };
    } catch (error) {
      return {
        response: EventType.START_SPOOF_RESPONSE,
        data: {
          message: 'nok',
        },
      };
    }
  }
}
