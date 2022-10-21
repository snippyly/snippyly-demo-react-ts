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

    // Enable attachment feature
    const commentElement = client.getCommentElement();
    commentElement.enableAttachment(true);
    commentElement.showScreenSizeInfo(true);
  }

  return (
    <SnippylyContext.Provider value={{ client }}>
      <div>
        <snippyly-cursor></snippyly-cursor>
        <snippyly-comments></snippyly-comments>
        <snippyly-comments-sidebar></snippyly-comments-sidebar>
        <snippyly-comment-tool></snippyly-comment-tool>
        <Toolbar onMenuSelect={(menu: any) => setSelectedMenu(menu)} />
        <Tabs selectedMenu={selectedMenu} />
      </div>
    </SnippylyContext.Provider>
  );
}

export default App;
