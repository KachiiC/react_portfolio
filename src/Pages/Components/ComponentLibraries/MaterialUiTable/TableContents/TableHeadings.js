import React from 'react'
// COMPONENTS
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

const TableHeadings = (props) => {

    // Grabs the key values from a single object 
    const table_headings = Object.keys(props.data[0])
    
    // Renders the keys for each object 
    const renderHeadings = table_headings.map(
        (heading, index) => (
            <TableCell align="inherit" key={index}>
                <b className="material-table-heading">{heading}</b>
            </TableCell>
        )
    ).slice(0,props.table_columns)
    // crops based on the number of table columns
    
    return (
        <TableHead>
            <TableRow>
                <TableCell align="justify"/>
                {renderHeadings}
            </TableRow>
        </TableHead>
    )
}


export default TableHeadings