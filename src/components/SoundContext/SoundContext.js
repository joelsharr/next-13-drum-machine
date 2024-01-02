"use client";
import React from 'react';

export const EnabledContext = React.createContext();

function SoundContext({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const context = {
    soundEnabled: soundEnabled,
    setSoundEnabled: setSoundEnabled,
  };
  return (
    <EnabledContext.Provider value={context}>
      {children}
    </EnabledContext.Provider>
  )
}

export default SoundContext;
