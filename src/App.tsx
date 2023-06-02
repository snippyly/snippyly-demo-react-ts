import { VeltCommentsSidebar, VeltCommentTool, VeltCursor, VeltHuddle, VeltProvider, VeltRecorderControlPanel, VeltRecorderNotes } from '@veltdev/react';
import { Velt } from '@veltdev/types';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import StreamView from './components/StreamView/StreamView';
import Toolbar from './components/Toolbar/Toolbar';

function App() {

  const init = async (client?: Velt) => {
    if (client) {
      // To enable text comment feature
      const commentElement = client.getCommentElement();
      commentElement.enableTextComments();
      // Enable attachment feature
      commentElement.disableAttachments();
      // Show screen size info
      commentElement.enableDeviceInfo();

      // To enable live selection feature
      const selectionElement = client.getSelectionElement();
      selectionElement.enableLiveSelection();

      // Set document id
      client.setDocumentId(excludeVeltParamsFromUrl(window.location.href));
    }
  }

  const excludeVeltParamsFromUrl = (url: string) => {
    try {
      const tempUrl = new URL(url);
      ['review', 'sreviewId', 'snippyly-user', 'scommentId', 'stagId'].forEach((param) => {
        tempUrl.searchParams.delete(param);
      });
      return tempUrl.href;
    } catch (err) {
      return url;
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
        <VeltCommentsSidebar />
        <VeltCommentTool />
        <VeltRecorderControlPanel />
        <VeltRecorderNotes />
        <VeltHuddle />
        <Toolbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/stream-view" element={<StreamView />} />
        </Routes>
      </div>
    </VeltProvider>
  );
}

export default App;
