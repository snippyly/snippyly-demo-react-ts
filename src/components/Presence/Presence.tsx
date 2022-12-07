import { useSnippylyClient } from '@snippyly/react';
import { PresenceUser } from '@snippyly/types';
import React, { useEffect, useState } from 'react';

function Presence() {

    const [presenceUsers, setPresenceUsers] = useState<PresenceUser[]>([]);

    const { client } = useSnippylyClient();

    useEffect(() => {
        if (client) {
            getOnlineUsersOnCurrentDocument();
        }
    }, [client]);

    const getOnlineUsersOnCurrentDocument = () => {
        const presenceElement = client.getPresenceElement();
        presenceElement.getOnlineUsersOnCurrentDocument().subscribe((_presenceUsers: PresenceUser[] | null) => {
            setPresenceUsers(_presenceUsers || []);
        });
    }

    return (
        <div>
            {
                presenceUsers.map((presenceUser) => {
                    return (
                        <div key={presenceUser.userId}>
                            {/* Add custom UI code here */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Presence;