import React, { useEffect, useState } from 'react'
import { useSnippylyClient } from '../../context/SnippylyContext';
import './Menus.css';

function Menus({ onMenuSelect }: { onMenuSelect: Function }) {

    const menuArray = [
        { name: 'Document 1', link: '' },
        { name: 'Document 2', link: 'document-2' },
        { name: 'Document 3', link: 'document-3' }
    ]

    const [menus, setMenus] = useState(menuArray);
    const [selectedMenu, setSelectedMenu] = useState(0);

    const { client } = useSnippylyClient();

    useEffect(() => {
        if (client) {
            setDocumentId(0, `${window.location.origin}/${menuArray[0].link}`);
        }
    }, [client])

    useEffect(() => {
        const menu = menus[selectedMenu];
        onMenuSelect(menu);
    }, [selectedMenu])

    const setDocumentId = (index: number, documentId: string) => {
        if (client) {
            setSelectedMenu(index);
            client.setDocumentId(documentId);
        }
    }

    return (
        <div className='menu-container'>
            {
                menus.map((menu, index) => {
                    return (
                        <span className={`menu ${selectedMenu === index ? 'selected' : ''}`}
                            key={menu.name}
                            onClick={() => setDocumentId(index, `${window.location.origin}/${menu.link}`)}>
                            {menu.name}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Menus;