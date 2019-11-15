/**
 * Created by Liudq on 2019/11/11
 */
import React, {Component} from 'react';
import {LogoView} from "../../component/LogoView/LogoView";
import {HeaderNavView} from "../../component/HeaderNavView/HeaderNavView";
import {HeaderLoginView} from "../../component/HeaderLoginView/HeaderLoginView";
import headerViewStyle from './headerViewStyle.css';

let headerNavList = [
    {name:"首页",link:"/home",active:true},
    {name:"双师课堂",link:"/doubleTeacherCourse",active:false},
    {name:"课程介绍",link:"/courseIntroduce",active:false},
    {name:"师资介绍",link:"/teacherIntroduce",active:false}
];
let headerNavConfig={
    headerNavList:headerNavList,
    activeClassName:"",
    itemClassName:"",
    headerNavListClassName:""
};
export class HeaderView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="header_content">
                    <LogoView />
                    <div className="header_content_right">
                        <HeaderNavView
                            headerNavConfig={headerNavConfig}/>
                        <HeaderLoginView/>
                    </div>
                </div>
            </div>
        );
    }
}