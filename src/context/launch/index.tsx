import React, { FC, createContext, useContext, useState } from 'react';

type LaunchContext = { launchSelected: string, setLaunchSelected: Function } | null;

const LaunchStateContext = createContext<LaunchContext>(null);

export const LaunchProvider: FC = ({ children }) => {

  const initialState: string = '';
  const [launchSelected, setLaunchSelected] = useState<string>(initialState);
  const providerValue: LaunchContext = { launchSelected, setLaunchSelected };

  return (
    <LaunchStateContext.Provider value={providerValue}>
      {children}
    </LaunchStateContext.Provider>
  );
}

export const useLaunch = () => {

  const launchContext = useContext(LaunchStateContext);
  if(!launchContext) throw new Error('useLaunch must be used within LaunchProvider');
  return launchContext;
}