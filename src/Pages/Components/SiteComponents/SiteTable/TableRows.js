import React from 'react'

const TableRows = (props) => {

    const displayData = props.data.map((data, index) => {

        const singleColumn = Object.keys(props.data[0]).map((column, index) => (
                <td key={index}>{data[`${column}`]}</td>
            )
        )

        return (
            <tr key={index}>
                {singleColumn}
            </tr>
        )
    })

    return displayData

}

export default TableRows