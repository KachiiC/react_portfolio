import React from 'react'
// COMPONENT
import TableComponent from './TableComponent'
// DATA
import TableData from 'Data/SiteComponents/TableData'
// CSS
import './TableComponent.css'

const SiteTable = {

    title: "React Table",
    introduction: "A simple table component built with react. To edit the data simply open the data file located at 'Data/SiteComponents/TableData.js'! to edit each row of data.",
    component: <TableComponent data={TableData}/>,
    description: "The component maps over the keys of the first object and returns them as column headers. The components then takes each object in the array and returns each value under the corresponding header. Note: all the objects must have the keys for this table to work."

}

export default SiteTable