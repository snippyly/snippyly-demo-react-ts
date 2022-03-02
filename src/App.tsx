import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Snippyly } from '@snippyly/sdk';
import { Users } from './Users';
import { SnippylyContext } from './context/SnippylyContext';

function App() {
  const [snippyly, setSnippyly] = useState();
  const [selectedUser, setSelectedUser] = useState<any>();
  const users = Users;

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setSelectedUser(JSON.parse(localStorage.getItem('user')!));
    }
  }, [])

  useEffect(() => {
    if (selectedUser) {
      signIn();
    }
  }, [selectedUser])

  const initSnippyly = async () => {
    const snippyly = await Snippyly.init({
      apiKey: "TA66fUfxZVtGBqGxSTCz", // Add your Api Key here
      featureAllowList: [], // To allow specific features only
      // userIdAllowList: ['abcd'], // To allow specific users only
      urlAllowList: [], // To allow snippyly in specific screens only
      user: selectedUser // Pass user with unique userId
    });
    console.log('snippyly', snippyly);
    setSnippyly(snippyly);
  }

  const signIn = (): void => {
    localStorage.setItem('user', JSON.stringify(selectedUser));
    initSnippyly();
  }

  const signOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <SnippylyContext.Provider value={{ snippyly }}>
      <div>
        <div className='header'>
          <snippyly-presence></snippyly-presence>
          <snippyly-cursor></snippyly-cursor>
          <div>
            {
              selectedUser ?
                <div>
                  <span>Hi, {selectedUser?.name}</span>
                  <button className='custom-btn' onClick={() => signOut()}>Sign Out</button>
                </div>
                :
                <div>
                  <span>Sign In with:</span>
                  {
                    users.map((user) => {
                      return (
                        <button key={user.userId} className='custom-btn' onClick={() => setSelectedUser(user)}>{user?.name}</button>
                      )
                    })
                  }
                </div>
            }
          </div>
        </div>
      </div>
    </SnippylyContext.Provider>
  );
}

export default App;
