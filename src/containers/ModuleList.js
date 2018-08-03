import React, {Component} from 'react'
import ModuleListItemStateless from '../components/ModuleListItem'
import AddComponent from '../components/AddComponent'

export default class ModuleList extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            modules: [
                {title: "Module 1"},
                {title: "Module 2"},
                {title: "Module 3"},
                {title: "Module 4"},
                {title: "Module 5"},
                {title: "Module 6"}
            ]
        }

    }
    renderModuleList = () => {
        return (
            this.state.modules.map((module, i) =>
                <ModuleListItemStateless key={i}
                                         title={module.title}/>)
        )
    }

    render() {
        return(
            <div>
                <AddComponent/>
                <br/>
                <ul className="list-group">
                    {this.renderModuleList()}
                </ul>
            </div>

        )
    }
}