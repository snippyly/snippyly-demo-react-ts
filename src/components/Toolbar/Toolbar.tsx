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
            identifySnippyly();
        }
    }, [selectedUser && snippyly])

    const identifySnippyly = async () => {
        if (snippyly) {
            snippyly.identify(selectedUser).then((res) => {
                // User login successful
            }).catch((err) => {
                // User login failure
            });
        }
    }

    const signIn = (user: any): void => {
        // Add custom logic here to login user
        // Once user is available call identifySnippyly
        localStorage.setItem('user', JSON.stringify(user));
        setSelectedUser(user);
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
                                        <button key={user.userId} className='custom-btn' onClick={() => signIn(user)}>{user?.name}</button>
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