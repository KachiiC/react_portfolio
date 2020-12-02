import React, {useState} from 'react'

const TabsComponent = (props) => {

    const tabs = props.tabs
    const [currentTab, setCurrentTab] = useState(0)

    const displayTabs = tabs.map((tab, index) => (
        <div className="single-tab" 
            key={index}
            onClick={() => setCurrentTab(tabs.indexOf(tab))}
        >
            <h4>{tab.title}</h4>
        </div>
    ))

    return (
        <div className="tabs-component-container">
            <div className="tabs-component-row">
                {displayTabs}
            </div>
            <div className="tabs-display-content">
                {tabs[currentTab].content} 
            </div>
        </div>
      );

}

export default TabsComponent