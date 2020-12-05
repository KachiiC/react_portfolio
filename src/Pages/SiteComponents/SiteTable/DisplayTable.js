import TableData from 'Data/SiteComponents/TableData'
import React from 'react'
import TableComponent from './TableComponent'

const DisplayTable = () => {

    const tableColumns = ["chinese_characters", "pinyin", "definition", "type"]

    return (
        <TableComponent data={TableData} columns={tableColumns}/>
    )
}

export default DisplayTable