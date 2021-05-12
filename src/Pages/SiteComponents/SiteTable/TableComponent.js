import React from 'react'
// COMPONENTS
import TableHeadings from './TableHeadings'
import TableRows from './TableRows'

const TableComponent = (props) => (

    <table className="site-table-component w-70">
        <TableHeadings data={props.data} />
        <TableRows data={props.data} />
    </table>

)

export default TableComponent