import { Snippyly } from '@snippyly/sdk';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import StreamView from './components/StreamView/StreamView';
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

    // To enable text comment feature
    const commentElement = client.getCommentElement();
    commentElement.enableTextComments(true);
    // Enable attachment feature
    commentElement.enableAttachment(true);
    // Set document id
    client.setDocumentId(window.location.href);
  }

  return (
    <SnippylyContext.Provider value={{ client }}>
      <div>
        <snippyly-cursor></snippyly-cursor>
        <snippyly-comments-sidebar></snippyly-comments-sidebar>
        <snippyly-comment-tool>
          <div className='add-comment-btn'>
            <img src='https://cdn-icons-png.flaticon.com/512/727/727570.png' alt='Add comment' />
          </div>
        </snippyly-comment-tool>
        <Toolbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/stream-view" element={<StreamView />} />
        </Routes>
      </div>
    </SnippylyContext.Provider>
  );
}

export default App;
