import { EventType } from '../../../ipc';
import GetSpecUseCase from './get-spec-use-case';

export default class GetSpecController {
  constructor(private getSpecUseCase: GetSpecUseCase) {}

  async handle() {
    try {
      const message = await this.getSpecUseCase.execute();
      return {
        response: EventType.GET_CONFIG_RESPONSE,
        data: message,
      };
    } catch (error) {
      return {
        response: EventType.GET_CONFIG_RESPONSE,
        data: {
          message: 'nok',
        },
      };
    }
  }
}
