export const SiteCardsDescription = (
    <p>
        This is a basic card component which is not too dissimilar to what you would see in normal HTML and CSS. Which React, instead of typing two sets of code to display two cards, react allows programmers to pass data (in this case the CardData.js) as an arguement and dynamically display it. The image, title and description are the only things that change in this instance and this reduces the amount of repeated code.
    </p>
)

export const SiteTableDescription = (
    <p>
        The component maps over the keys of the first object and returns them as column headers. The components then takes each object in the array and returns each value under the corresponding header. Note: all the objects must have the keys for this table to work.
    </p>
)

export const SiteTabsDescription = (
    <p>
        This component takes an array of objects as an arguement. Each object contains 'title' and 'content'. Mapping the array and returning each object gives us a tab for each object. The displayIndex state (with the default set as 0) will detirmine which content is currently being displayed. Only one set of content will be displayed at a time and that content is detirmed by which index in the data array is currently selected.The index is set when a tab is clicked, the  which in turn changes the displayed content.
    </p>
)

export const SiteModalDescription = (
    <p>
        The data in the ModalData file is stored in as an array, so a map function is used to return each of the image urls. The image urls are used to display each of the modal images. Each image is assigned a ‘rename’ and ‘changeVisibility’ function. The ‘rename’ function uses state to assign result to the same properties as the image clicked. The ‘changeVisibility’ function changes the visibility of the the modal. Clicking the ‘X’ when the modal appears closes the modal.
    </p>
)
