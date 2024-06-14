import React from 'react';
import DarkModeSwitcher from './components/DarkModeSwitcher';
import Card from './components/Card';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <DarkModeSwitcher />
      <h1 className="text-3xl mt-6 text-gray-900 dark:text-gray-100">
        Welcome to Dark Mode Example
        <div>
          <Card/>
        </div>
      </h1>
    </div>
  );
}

export default App;
