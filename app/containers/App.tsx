import React, { ReactNode } from 'react';
import TrayContext from '../constants/TrayContext';
import { remote } from 'electron';
type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);


  const tray = React.useContext(TrayContext);
  tray.setContextMenu(
    remote.Menu.buildFromTemplate([
      {
        label: 'Quit',
        type: 'normal',
        click: () => {
          console.log(
            'Clicked the quit button. Terminate the application as a whole'
          );
          console.log(arguments[0]);
          setIsOpen(true);
        },
      },
      {
        label: 'Choose folder',
        type: 'normal',
        click: () => {
          console.log(
            'Clicked the choose folder button. I need to open a window here'
          );
          console.log(arguments[0]);
        },
      },
    ])
  );
  tray.setToolTip('Ems Watcher');
  const { children } = props;
  return isOpen ? <>{children}</> : null;
}
