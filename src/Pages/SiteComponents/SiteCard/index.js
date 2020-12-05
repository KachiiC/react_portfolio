import React from 'react'
// CSS
import './CardComponent.css'
// Component
import DisplayCard from './DisplayCard'

const SiteCard = {
    title: "React Cards",
    introduction: "A simple card component built with react. To add more cards or edit the existing cards, simply open the data file on 'Data/SiteComponents/CardData.js'!",
    component: <DisplayCard />,
    description: "This is a basic card component which is not too dissimilar to what you would see in normal HTML and CSS. Which React, instead of typing two sets of code to display two cards, react allows programmers to pass data (in this case the CardData.js) as an arguement and dynamically display it. The image, title and description are the only things that change in this instance and this reduces the amount of repeated code."

}

export default SiteCard