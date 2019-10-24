import React from 'react'
import Cell from './Cell'
import './Row.css'

export default function Row(props) {
    return (
        <div>
            {props.columnArrFromTable.split(',').map((item, key) =>(
                <Cell
                key={key}
                cellIdFromRow={`${props.rowValFromTable}${item}`}
                handleChangeFromRow={props.handleChangeFromTable}
                columnArrFromRow={props.columnArrFromTable}
                />
            ))}
        </div>
    )
}
