import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem'

export default class ModuleList extends Component {
    render() {
        return(
            <ul className="list-group">
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
            </ul>
        )
    }
}