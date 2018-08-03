import React, {Component} from 'react'

/**
 * Stateless component
 * */
// const ModuleListItemStateless = () =>
//     <li className="list-group-item">
//         Module1 (Stateless)
//         <span className="float-right">
//                     <button className="fa fa-pencil"></button>
//                     <button className="fa fa-trash"></button>
//                 </span>
//     </li>;
//
// export default ModuleListItemStateless;


export default class ModuleListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <li className="list-group-item">
                {this.props.title}
                <span className="float-right">
                    <button className="fa fa-pencil"></button>
                    <button className="fa fa-trash"></button>
                </span>
            </li>
        )
    }
}