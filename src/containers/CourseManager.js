import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import CourseEditor from './CourseEditor'

export default class CourseManager extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Course Manager</a>
                </nav>
                <div className="container-fluid">
                    <CourseEditor/>
                    <div className="card-deck">
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </div>

        )
    }
};