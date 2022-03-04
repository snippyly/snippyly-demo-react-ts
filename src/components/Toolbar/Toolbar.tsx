import React, { useEffect, useState } from 'react'
import { useSnippyly } from '../../context/SnippylyContext';
import { Users } from '../../Users';

function Toolbar() {
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const users = Users;

    const { snippyly } = useSnippyly();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setSelectedUser(JSON.parse(localStorage.getItem('user')!));
        }
    }, [])

    useEffect(() => {
        if (selectedUser && snippyly) {
            signIn();
        }
    }, [selectedUser && snippyly])

    const identifySnippyly = async () => {
        if (snippyly) {
            console.log('identifySnippyly')
            await snippyly.identify({
                featureAllowList: [], // To allow specific features only
                // userIdAllowList: ['abcd'], // To allow specific users only
                urlAllowList: [], // To allow snippyly in specific screens only
                user: selectedUser // Pass user with unique userId
            });
        }
    }

    const signIn = (): void => {
        localStorage.setItem('user', JSON.stringify(selectedUser));
        identifySnippyly();
    }

    const signOut = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <div className='header'>
            <snippyly-presence></snippyly-presence>
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
    )
}

export default Toolbar;