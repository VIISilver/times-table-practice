import React, { Fragment } from 'react'
import './Cell.css'

export default function Cell(props) {
    return (
        <Fragment>
            <input
            id={props.cellIdFromRow}
            value={props.cellIdFromRow}
            onChange={props.handlechangefromrow}
            disabled={props.cellIdFromRow[0] === 'a' || props.cellIdFromRow[1] === '0'} />
        </Fragment>
    )
}
