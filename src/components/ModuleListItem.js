import React, {Component} from 'react'

export default class ModuleListItem extends Component {
    render() {
        return(
            <li className="list-group-item">
                Module 1
                <span className="float-right">
                    <button className="fa fa-pencil"></button>
                    <button className="fa fa-trash"></button>
                </span>
            </li>
        )
    }
}