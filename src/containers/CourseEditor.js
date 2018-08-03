import React, {Component} from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from "./TopicPills";

export default class CourseEditor extends Component {
    render() {
        return(
            <div>
                <br/>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <br/>
                        <div className="col-10">
                            <TopicPills/>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}