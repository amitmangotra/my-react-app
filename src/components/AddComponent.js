import React, {Component} from 'react'

export default class AddComponent extends Component {
    render() {
        return(
            <div className="input-group">
                <input className="form-control"
                       placeholder="Enter title here"
                       style={{marginRight: "5px"}}/>
                <button className="btn btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        )
    }
}