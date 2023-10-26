import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { EventType } from '../../main/ipc';
import useSpecContext from '../hooks/context/useSpecContext';

export default function LayoutWithSidebar() {
  const { changeMacAddress } = useSpecContext();

  useEffect(() => {
    window.electron.ipcRenderer.on(
      EventType.GET_CONFIG_RESPONSE,
      (response) => {
        changeMacAddress(response.data.macAddress);
      },
    );
  }, []);

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage(EventType.START_APP, {});
  }, []);

  return (
    <div className="flex h-full w-full py-4 px-2">
      <Sidebar />
      <div className="w-full h-full p-4">
        <Outlet />
      </div>
    </div>
  );
}
