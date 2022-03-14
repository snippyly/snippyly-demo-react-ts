import React, { useState } from 'react'
import { useSnippylyClient } from '../../context/SnippylyContext';
import './Menus.css';

function Menus() {

    const menuArray = [
        { name: 'Home', link: '' },
        { name: 'About Us', link: 'about-us' },
        { name: 'Contact Us', link: 'contact-us' }
    ]

    const [menus, setMenus] = useState(menuArray);
    const [selectedMenu, setSelectedMenu] = useState(0);

    const { client } = useSnippylyClient();

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
                            onClick={() => setDocumentId(index, `${window.location.href}${menu.link}`)}>
                            {menu.name}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Menus;