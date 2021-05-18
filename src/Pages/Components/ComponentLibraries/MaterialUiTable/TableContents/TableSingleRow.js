import React, {useState} from 'react';
// Components
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TableCollapsableRow from './TableCollapsableRow';


const TableSingleRow = (props) => {

    // Index (used to define each row)
    const index = props.index
    
    // grabs all value 
    const rowLogic = () => {
        if ('content' in props.row) {
            delete props.row.content
            return props.row
        }
        return props.row
    }
    
    const rowContent = Object.values(rowLogic())

    // By default rows are closed and content is hidden
    const [open, setOpen] = useState(false)

    // When clicked open Logic with toggle 
    const openLogic = () => setOpen(!open)

    // Returns a table cell for each value in object until cropped
    const displayedTableCells = rowContent.map((attribute, index) => (
            <TableCell align="justify" key={index}>
                {attribute}
            </TableCell>
        )
    )

    const arrowLogic = open ? 
        <KeyboardArrowDownIcon /> 
        : 
        <ChevronRightIcon />

    return (
        <>
            <TableRow>
                <TableCell>
                    {props.content && (
                        <IconButton 
                            key={index} 
                            aria-label="expand row" 
                            size="small" 
                            onClick={openLogic}
                        >
                        {arrowLogic}
                        </IconButton>
                    )}
                </TableCell>
                {displayedTableCells}
            </TableRow>
            <TableCollapsableRow
                open={open}
                content={props.content}
            />
        </>
    )

}

export default TableSingleRow