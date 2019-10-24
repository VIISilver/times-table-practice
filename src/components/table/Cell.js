import React, { Fragment } from 'react'
import './Cell.css'

export default function Cell(props) {

    const { cellIdFromRow, handleChangeFromRow, columnArrFromRow } = props

    return (
        <Fragment>
            <input
            id={cellIdFromRow}
            className='response-cell'
            // defaultValue={cellIdFromRow === 'a0' ? '' : props.cellIdFromRow}
            defaultValue={cellIdFromRow === 'a0' ? '' : props.cellIdFromRow}
            onChange={handleChangeFromRow}
            disabled={cellIdFromRow[0] === 'a' || cellIdFromRow[1] === '0'} />
        </Fragment>
    )
}
