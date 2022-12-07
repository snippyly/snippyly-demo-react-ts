import { SnippylyPresence, useSnippylyClient } from '@snippyly/react';
import React, { useEffect, useState } from 'react'
import './Tabs.css';

function Tabs({ selectedMenu }: { selectedMenu: any }) {
    const [tabs, setTabs] = useState(['Child Document 1', 'Child Document 2', 'Child Document 3']); // change it to child document, ui similar to slides
    const [tabDocumentParams, setTabDocumentParams] = useState<any>([]);
    const [selectedTab, setSelectedTab] = useState<number>();

    const { client } = useSnippylyClient();

    useEffect(() => {
        setTabDocumentParams(tabs.map((tab, index) => {
            return { selectedTab: index + 1 }
        }));
    }, [])

    useEffect(() => {
        if (client) {
            updateDocumentParams();
        }
    }, [client]);

    useEffect(() => {
        updateDocumentParams();
    }, [selectedTab])

    useEffect(() => {
        setSelectedTab(undefined);
    }, [selectedMenu])

    const updateDocumentParams = () => {
        if (client) {
            if (selectedTab) {
                const params = { selectedTab };
                client.setLocation(params);
            } else {
                client.removeLocation();
            }
        }
    }

    return (
        <>
            <div className='tabs-container'>
                <div className='tabs-block'>
                    {
                        tabs.map((tab, index) => {
                            return (
                                <>
                                    <div key={index} className={`tab ${(selectedTab === index + 1) ? 'selected' : ''}`} onClick={() => setSelectedTab(index + 1)}>
                                        {tab}
                                        <div className='presence-container'>
                                            <SnippylyPresence maxUsers={1} location={JSON.stringify(tabDocumentParams[index])} />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='tabs-content'>
                    {
                        selectedTab ?
                            <div>
                                <span>You are on {selectedMenu?.name}, {tabs[selectedTab - 1]}.</span><br />
                                <span className='clear-btn' onClick={() => setSelectedTab(undefined)}>Clear Selection</span>
                            </div>
                            :
                            <div>You are on {selectedMenu?.name}.<br />You haven't selected any sections.</div>
                    }
                </div>
            </div>
            <div className='notes-container'>
                <div className='notes-block'>
                    <h3>NOTE:</h3>
                    <ul>
                        <li>Presence: The avatar of other online users shows at document level.</li>
                        <li>Cursors: Cursors of others online show at Section level. If no section is selected it will show at Document level.</li>
                        <li>Sections are always under Documents in hierarchy.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Tabs;