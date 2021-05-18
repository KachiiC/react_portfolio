import React from 'react'
// CSS 
import './TableComponent.css'
// COMPONENTS
import TableHeadings from './TableHeadings'
import TableRows from './TableRows'

const SiteTable = (props) => (

    <table className="site-table-component w-70">
        <TableHeadings data={props.data} />
        <TableRows data={props.data} />
    </table>

)

export default SiteTable