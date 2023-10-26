import { EventType } from '../../../main/ipc';
import useSpecContext from '../../hooks/context/useSpecContext';

export default function Checker() {
  const { macAddress } = useSpecContext();

  function startSpoof() {
    window.electron.ipcRenderer.sendMessage('ipc', {
      event: EventType.START_SPOOF,
    });
  }

  function updateInfo() {
    window.electron.ipcRenderer.sendMessage('ipc', {
      event: EventType.GET_CONFIG,
    });
  }

  return (
    <div className="flex flex-col gap-4 bg-zinc-800 w-full h-full text-white p-4 rounded-md">
      <span>Motherboard: </span>
      <span>BIOS: </span>
      <span>CPU: </span>
      <span>UUID: </span>
      <span>MAC Address: {macAddress}</span>
      <span>Validade Key: </span>
      <span>HWID: </span>
      <span>IP ADDRESS: </span>

      <button type="button" onClick={updateInfo}>
        UPDATE INFO
      </button>
      <button type="button" onClick={startSpoof}>
        START SPOOF
      </button>
    </div>
  );
}
