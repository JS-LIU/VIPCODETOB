/**
 * Created by Liudq on 2019/11/11
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    HashRouter,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import {HomeView} from "./container/homeView/HomeView";
import {DoubleTeacherCourseView} from "./container/doubleTeacherCourse/DoubleTeacherCourseView";
import {TeacherIntroduceView} from "./container/teacherIntroduceView/TeacherIntroduceView";
import {CourseIntroduceView} from "./container/courseIntroduceView/CourseIntroduceView";


let redirectUrl = "/home";

ReactDOM.render(
    (<HashRouter history={history}>
        <Redirect to={redirectUrl}/>
        <div>
            <Route path="/home" component={HomeView}/>
            <Route path="/doubleTeacherCourse" component={DoubleTeacherCourseView}/>
            <Route path="/courseIntroduce" component={CourseIntroduceView}/>
            <Route path="/teacherIntroduce" component={TeacherIntroduceView}/>
        </div>
    </HashRouter>),
    document.getElementById('app')
);