import React, { Component } from 'react'
import Row from './Row'
import './Table.css'

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
            columns: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }
    }

    handleChange = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <div>
                {this.state.rows.map((item, key) => (
                    <Row 
                    key={key}
                    rowValFromTable={item}
                    columnArrFromTable={this.state.columns.join(',')}
                    handleChangeFromTable={this.handleChange}
                    />
                ))}
            </div>
        )
    }
}
