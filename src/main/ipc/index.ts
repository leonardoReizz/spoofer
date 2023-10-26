import createFilesController from '../components/files/create-files';
import getSpecController from '../components/spec/get-spec';
import startSpoofController from '../components/spoof/start';

export interface IPCResponse {
  message: 'ok' | 'nok';
  data: any;
}
export enum EventType {
  GET_CONFIG = 'GET_CONFIG',
  GET_CONFIG_RESPONSE = 'GET_CONFIG_RESPONSE',
  START_SPOOF = 'START_SPOOF',
  START_SPOOF_RESPONSE = 'START_SPOOF_RESPONSE',
  START_APP = 'START_APP',
}

export interface UseIPCData {
  id: string;
  event: string;
  data?: any;
}

export interface UseIpcActionsReturn {
  response: string;
  data?: any;
}

export default async function useIPC(arg: UseIPCData): Promise<any> {
  switch (arg.event) {
    case EventType.GET_CONFIG:
      return getSpecController.handle();
    case EventType.START_SPOOF:
      return startSpoofController.handle();

    default:
      return null;
  }
}
