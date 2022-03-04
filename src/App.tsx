import { Snippyly } from '@snippyly/sdk';
import React, { useEffect, useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import { SnippylyContext } from './context/SnippylyContext';

function App() {
  const [snippyly, setSnippyly] = useState<Snippyly>(null as any);

  useEffect(() => {
    initSnippyly();
  }, [])

  const initSnippyly = async () => {
    const snippyly = await Snippyly.init('TA66fUfxZVtGBqGxSTCz'); // Add your Api Key here
    console.log('snippyly', snippyly);
    setSnippyly(snippyly);
  }

  return (
    <SnippylyContext.Provider value={{ snippyly }}>
      <div>
        <snippyly-cursor></snippyly-cursor>
        <Toolbar />
      </div>
    </SnippylyContext.Provider>
  );
}

export default App;
