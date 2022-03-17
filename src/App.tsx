import { Snippyly } from '@snippyly/sdk';
import React, { useEffect, useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import { SnippylyContext } from './context/SnippylyContext';

function App() {
  const [client, setClient] = useState<Snippyly>(null as any);

  useEffect(() => {
    init();
  }, [])

  const init = async () => {
    const client = await Snippyly.init('TA66fUfxZVtGBqGxSTCz', {
      featureAllowList: [], // To allow specific features only
      // userIdAllowList: ['abcd'], // To allow specific users only
      urlAllowList: [], // To allow snippyly in specific screens only
    }); // Add your Api Key here
    console.log('snippyly client', client);
    setClient(client);
  }

  return (
    <SnippylyContext.Provider value={{ client }}>
      <div>
        <snippyly-cursor></snippyly-cursor>
        <Toolbar />
        <div className="box-container">
          <div className="box" id="box1"><span>1</span></div>
          <div className="box" id="box2"><span>2</span></div>
          <div className="box" id="box3"><span>3</span></div>
          <div className="box" id="box4"><span>4</span></div>
          <div className="box" id="box5"><span>5</span></div>
          <div className="box" id="box6"><span>6</span></div>
        </div>
      </div>
    </SnippylyContext.Provider>
  );
}

export default App;
