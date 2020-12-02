import React, {useState} from 'react'
// Data
import TabData from 'Data/TabData'

const TabComponents = () => {

    const [currentTab, setCurrentTab] = useState(0)

    const displayTabs = TabData.map((tab, index) => (
        <div className="single-tab" onClick={() => setCurrentTab(TabData.indexOf(tab))}>
            <h4>{tab.title}</h4>
        </div>
    ))

    return (
        <div className="component-container">
            <div className="tabs-row">
                {displayTabs}
            </div>
            <div className="display-content">
                {TabData[currentTab].content} 
            </div>
        </div>
      );
}

export default TabComponents

