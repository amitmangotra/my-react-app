import React, {Component} from 'react'
import ModuleListItemStateless from '../components/ModuleListItem'

export default class ModuleList extends Component {
    constructor() {
        super();
        this.state = {
            title: 'dummy value',
            modules: [
                {title: "Module 1"},
                {title: "Module 2"},
                {title: "Module 3"},
                {title: "Module 4"},
                {title: "Module 5"},
                {title: "Module 6"}
            ]
        }

        this.inputTitle = this.inputTitle.bind(this)

    }

    inputTitle(event) {
        this.setState({title: event.target.value})
    }

    createModule = () => {
        console.log(this.state.title)
        console.log(this.state.modules)
        var newModule = {title: this.state.title}
        this.state.modules.push(newModule)
        this.setState({"modules": this.state.modules})
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
                <div className="input-group">
                    <input className="form-control"
                           placeholder="Enter title here"
                           onChange={this.inputTitle}
                           style={{marginRight: "5px"}}/>
                    <button className="btn btn-primary"
                            onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
                <br/>
                <ul className="list-group">
                    {this.renderModuleList()}
                </ul>
            </div>

        )
    }
}