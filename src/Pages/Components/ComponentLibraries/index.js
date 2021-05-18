import React from 'react'
import MaterialUiTable from './MaterialUiTable'
import MaterialUiTableData from 'Data/Components/ComponentLibraries/MaterialUiTableData'

const ComponentLibraries = () => {


    return (
        <>
            <h1>Component Libraries</h1>
            <MaterialUiTable 
                data={MaterialUiTableData}
            />
        </>
    )
}

export default ComponentLibraries