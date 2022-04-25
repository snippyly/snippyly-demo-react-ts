import { Snippyly } from '@snippyly/sdk';
import React, { useEffect, useState } from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Toolbar from './components/Toolbar/Toolbar';
import { SnippylyContext } from './context/SnippylyContext';

function App() {
  const [client, setClient] = useState<Snippyly>(null as any);

  const [selectedMenu, setSelectedMenu] = useState();

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
        <snippyly-comments></snippyly-comments>
        <snippyly-comment-tool>
          <div className='add-comment-btn'>
            <img src='https://cdn-icons-png.flaticon.com/512/727/727570.png' alt='Add comment' />
          </div>
        </snippyly-comment-tool>
        <Toolbar onMenuSelect={(menu: any) => setSelectedMenu(menu)} />
        <Tabs selectedMenu={selectedMenu} />
      </div>
    </SnippylyContext.Provider>
  );
}

export default App;
