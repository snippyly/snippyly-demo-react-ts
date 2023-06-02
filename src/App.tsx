import { VeltComments, VeltCommentsSidebar, VeltCommentTool, VeltCursor, VeltProvider } from '@veltdev/react';
import { Velt } from '@veltdev/types';
import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Toolbar from './components/Toolbar/Toolbar';

function App() {

  const [selectedMenu, setSelectedMenu] = useState();

  const init = async (client?: Velt) => {
    if (client) {
      // Enable attachment feature
      const commentElement = client.getCommentElement();
      commentElement.enableAttachments();
      commentElement.enableDeviceInfo();
    }
  }

  return (
    <VeltProvider apiKey='TA66fUfxZVtGBqGxSTCz' config={{
      featureAllowList: [], // To allow specific features only
      // userIdAllowList: ['abcd'], // To allow specific users only
      urlAllowList: [], // To allow velt in specific screens only
    }} onClientLoad={(client) => init(client)}>
      <div>
        <VeltCursor />
        <VeltComments />
        <VeltCommentsSidebar />
        <VeltCommentTool />
        <Toolbar onMenuSelect={(menu: any) => setSelectedMenu(menu)} />
        <Tabs selectedMenu={selectedMenu} />
      </div>
    </VeltProvider>
  );
}

export default App;
