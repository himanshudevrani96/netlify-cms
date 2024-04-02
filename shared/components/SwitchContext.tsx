// SwitchContext.tsx
import React, { createContext, useContext, useState } from "react";

interface SwitchContextProps {
  switchState: boolean;
  toggleSwitch: () => void;
}

const SwitchContext = createContext<SwitchContextProps | undefined>(undefined);

export const SwitchProvider: React.FC = (children: any) => {
  const [switchState, setSwitchState] = useState(false);

  const toggleSwitch = () => {
    setSwitchState((prevSwitchState) => !prevSwitchState);
  };

  return <SwitchContext.Provider value={{ switchState, toggleSwitch }}>{children}</SwitchContext.Provider>;
};

export const useSwitchContext = (): SwitchContextProps => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitchContext must be used within a SwitchProvider");
  }
  return context;
};
