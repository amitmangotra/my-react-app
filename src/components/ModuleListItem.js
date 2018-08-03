import React, {Component} from 'react'

/**
 * Stateless component
 * */
const ModuleListItemStateless = ({title}) =>
    <li className="list-group-item">
        {title} (Stateless)
        <span className="float-right">
                    <button className="fa fa-pencil"></button>
                    <button className="fa fa-trash"></button>
                </span>
    </li>

export default ModuleListItemStateless;