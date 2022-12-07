import { SnippylyComments, SnippylyCommentsSidebar, SnippylyCommentTool, SnippylyCursor, SnippylyProvider } from '@snippyly/react';
import { Snippyly } from '@snippyly/types';
import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Toolbar from './components/Toolbar/Toolbar';

function App() {

  const [selectedMenu, setSelectedMenu] = useState();

  const init = async (client?: Snippyly) => {
    if (client) {
      // Enable attachment feature
      const commentElement = client.getCommentElement();
      commentElement.enableAttachment(true);
      commentElement.showScreenSizeInfo(true);
    }
  }

  return (
    <SnippylyProvider apiKey='TA66fUfxZVtGBqGxSTCz' config={{
      featureAllowList: [], // To allow specific features only
      // userIdAllowList: ['abcd'], // To allow specific users only
      urlAllowList: [], // To allow snippyly in specific screens only
    }} onClientLoad={(client) => init(client)}>
      <div>
        <SnippylyCursor />
        <SnippylyComments />
        <SnippylyCommentsSidebar />
        <SnippylyCommentTool />
        <Toolbar onMenuSelect={(menu: any) => setSelectedMenu(menu)} />
        <Tabs selectedMenu={selectedMenu} />
      </div>
    </SnippylyProvider>
  );
}

export default App;
