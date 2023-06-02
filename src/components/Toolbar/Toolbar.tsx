import { VeltPresence, useVeltClient } from '@veltdev/react';
import React, { useEffect, useState } from 'react'
import { Users } from '../../Users';
import Menus from '../Menus/Menus';

function Toolbar({ onMenuSelect }: { onMenuSelect: Function }) {
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const users = Users;

    const { client } = useVeltClient();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setSelectedUser(JSON.parse(localStorage.getItem('user')!));
        }
    }, [])

    useEffect(() => {
        if (selectedUser && client) {
            identifyVelt();
        }
    }, [selectedUser && client])

    const identifyVelt = async () => {
        if (client) {
            client.identify(selectedUser).then((res: any) => {
                // User login successful
            }).catch((err: any) => {
                // User login failure
            });
        }
    }

    const signIn = (user: any): void => {
        // Add custom logic here to login user
        // Once user is available call identifyVelt
        localStorage.setItem('user', JSON.stringify(user));
        setSelectedUser(user);
    }

    const signOut = async () => {
        if (client) {
            await client.signOutUser();
        }
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <div className='header'>
            <VeltPresence />
            <Menus onMenuSelect={onMenuSelect} />
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
                                users.map((user: any) => {
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