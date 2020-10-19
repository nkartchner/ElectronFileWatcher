import React from 'react';
import { remote, Tray as ITray } from 'electron';
import path from 'path';

const { Tray } = remote;
const tray = new Tray(path.join("C:/Users/pcnat/Documents/ElectronWatcher/resources/icon.png"));

const trayContext = React.createContext<ITray>(tray);

export default trayContext;
