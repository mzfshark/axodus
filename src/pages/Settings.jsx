// pages/settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({ theme: 'light' });

  const toggleTheme = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: prevSettings.theme === 'light' ? 'dark' : 'light',
    }));
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>Current Theme: {settings.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Settings;

