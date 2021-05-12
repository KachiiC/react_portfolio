import React from 'react'
// COMPONENTS
import TabsComponent from './TabsComponent'
// CSS
import './TabsComponent.css'
// DATA 
import TabData from 'Data/SiteComponents/TabData'

const SiteTabs = {

    title: "React Tabs",
    introduction: "A simple tabs component built with React. Simply click on the tabs to change the displayed content. To edit the data open the file stored in 'Data/SiteComponents/TabData.js'!",
    component: <TabsComponent tabs={TabData} />,
    description: "This component takes an array of objects as an arguement. Each object contains 'title' and 'content'. Mapping the array and returning each object gives us a tab for each object. The displayIndex state (with the default set as 0) will detirmine which content is currently being displayed. Only one set of content will be displayed at a time and that content is detirmed by which index in the data array is currently selected.The index is set when a tab is clicked, the  which in turn changes the displayed content."

}

export default SiteTabs