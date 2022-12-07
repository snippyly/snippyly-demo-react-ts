import { useSnippylyClient } from '@snippyly/react';
import { CursorUser } from '@snippyly/types';
import React, { useEffect, useState } from 'react';

function Cursor() {

    const [cursorUsers, setCursorUsers] = useState<CursorUser[]>([]);

    const { client } = useSnippylyClient();

    useEffect(() => {
        if (client) {
            getLiveCursorsOnCurrentDocument();
        }
    }, [client]);

    const getLiveCursorsOnCurrentDocument = () => {
        const cursorElement = client.getCursorElement();
        cursorElement.getLiveCursorsOnCurrentDocument().subscribe((_cursorUsers: CursorUser[] | null) => {
            setCursorUsers(_cursorUsers || []);
        });
    }

    return (
        <div>
            {
                cursorUsers.map((cursorUser) => {
                    return (
                        <div key={cursorUser.userId}>
                            {/* Add custom UI code here */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cursor;