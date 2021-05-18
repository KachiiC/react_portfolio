import React from 'react'

const TableHeadings = (props) => {

    const columns = Object.keys(props.data[0])

    const displayColumns = columns.map((column, index) => {
        const columnTitle = column.split("_").join(" ")

        return <th key={index}>{columnTitle}</th>
    })

    return (
        <tr>{displayColumns}</tr>
    )
}

export default TableHeadings