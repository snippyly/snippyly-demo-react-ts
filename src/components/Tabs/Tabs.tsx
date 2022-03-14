import React, { useEffect, useState } from 'react'
import { useSnippylyClient } from '../../context/SnippylyContext';
import './Tabs.css';

function Tabs() {
    const [tabs, setTabs] = useState(['Tab 1', 'Tab 2', 'Tab 3']);
    const [selectedTab, setSelectedTab] = useState<number>();

    const { client } = useSnippylyClient();

    useEffect(() => {
        if (client) {
            updateDocumentParams();
        }
    }, [client]);

    useEffect(() => {
        updateDocumentParams();
    }, [selectedTab])

    const updateDocumentParams = () => {
        if (client) {
            if (selectedTab) {
                const params = { selectedTab };
                client.setDocumentParams(params);
            } else {
                client.removeDocumentParams();
            }
        }
    }

    return (
        <div className='tabs-container'>
            <div className='tabs-block'>
                {
                    tabs.map((tab, index) => {
                        return (
                            <div key={index} className={`tab ${(selectedTab === index + 1) ? 'selected' : ''}`} onClick={() => setSelectedTab(index + 1)}>{tab}</div>
                        )
                    })
                }
            </div>
            <div className='tabs-content'>
                {
                    selectedTab ?
                        <div>
                            <span>You are on tab "{tabs[selectedTab - 1]}".</span><br />
                            <span className='clear-btn' onClick={() => setSelectedTab(undefined)}>Clear Selection</span>
                        </div>
                        :
                        <div>You haven't selected any tabs.</div>
                }
            </div>
        </div>
    )
}

export default Tabs;