import React, { Fragment } from 'react'
import './Cell.css'

export default function Cell(props) {
    return (
        <Fragment>
            <input
            id={props.cellIdFromRow}
            defaultValue={props.cellIdFromRow}
            onChange={props.handleChangeFromRow}
            disabled={props.cellIdFromRow[0] === 'a' || props.cellIdFromRow[1] === '0'} />
        </Fragment>
    )
}
