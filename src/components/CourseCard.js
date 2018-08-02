import React, {Component} from 'react'

export default class CourseCard extends Component {
    render() {
        return(
            <div className="card"
                 styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"
                     alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Lorem Ipsum</h5>
                        <p className="card-text">Lorem Ipsum</p>
                        <a href="#" className="btn btn-primary">More...</a>
                    </div>
            </div>
        )
    }
}