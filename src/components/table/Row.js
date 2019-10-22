import React from 'react'
import Cell from './Cell'
import './Row.css'

export default function Row(props) {
    return (
        <div 
        className='row-wrap'
        id={props.rowValFromTable}
        handlechangefromrow={props.handlechangefromtable}
        >
            {props.columnarrfromtable.map((item, key) =>(
                <Cell
                key={key}
                cellIdFromRow={`${props.rowValFromTable}${item}`}
                />
            ))}
        </div>
    )
}
