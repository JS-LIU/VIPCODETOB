/**
 * Created by Liudq on 2019/11/14
 */
import React, {Component} from 'react';
import {HeaderView} from "../headerView/HeaderView";
import {SectionTitleView} from "../sectionTitleView/SectionTitleView";
import {baseUrl} from "../../config/config";

import courseIntroduceViewStyle from './courseIntroduceViewStyle.css';
import {FooterView} from "../footerView/FooterView";

let courseTabList = [
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/course_scratch_img.png",
        title:"Scratch编程（L1-L9）",
        activeStyle:{border:"2px solid #FAAC45",
            background:"#FFF url('"+baseUrl.getBaseUrl()+"/src/img/scratch_course_selected.png"+"') top right / 38px no-repeat"},
        active:false,
        color:"#FAAC45",
        describe:"编程入门知识、Scratch图形编程、简单APP开发",
        detailImg:baseUrl.getBaseUrl()+"/src/img/course_scratch_img_graph.png"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/course_python_img.png",
        title:"Python编程（L1-L9）",
        activeStyle:{border:"2px solid #0FB3E1",
            background:"#FFF url('"+baseUrl.getBaseUrl()+"/src/img/python_course_selected.png"+"') top right / 38px no-repeat"},
        active:true,
        color:"#02B3E4",
        describe:"Python源码编程、人工智能基础、人工智能深度开发",
        detailImg:baseUrl.getBaseUrl()+"/src/img/course_python_graph.png"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/course_cpp_img.png",
        title:"C++编程（L1-L9）",
        activeStyle:{border:"2px solid #FB5B87",
            background:"#FFF url('"+baseUrl.getBaseUrl()+"/src/img/cpp_course_selected.png"+"') top right / 38px no-repeat"},
        active:false,
        color:"#FB5B87",
        describe:"Python源码编程、人工智能基础、人工智能深度开发",
        detailImg:baseUrl.getBaseUrl()+"/src/img/course_cpp_graph.png"},
];
let theoryList = [
    {order:"01",title:"主题",describe:["主题：主题指的是程序的主题IP。 主题维度决定了孩子是否对课程感兴趣。","按单元划分主题可增强课程的体系感。"]},
    {order:"02",title:"学科",describe:["学科指的是课程设计与跨学科知识有结合。","学科维度是家长认可课程的一项因素。"]},
    {order:"03",title:"指令",describe:["指令是一种编程语言中的特有命令。","指令维度的全面性决定了学生能否熟练掌握某种编程语言的全部功能。"]},
    {order:"04",title:"模式",describe:["模式指的是从同类程序中抽象出的算法单元。","模式维度决定了学生能够使用编程解决问题的复杂程度；模式积累的量变引起构建新模式能力的质变。"]},
    {order:"05",title:"计算机科学",describe:["计算机科学：参照美国CSTA计算机科学教育标准，在制订课程大纲时尊重学生认知发展规律。 计算思维维度决定了学生能否系统地学会编程，决定了知识点难度递进关系，是构建课程大纲的基础。"]},
    {order:"06",title:"类型",describe:["类型指的是程序实例的功能类型。 说白了就是“学编程都能做什么？” 类型维度是家长和孩子认可课程的一项因素，类型越丰富的课程越容易得到家长认可。","游戏类型的程序很有趣，工具类型的程序很有用。"]},
];

export class CourseIntroduceView extends Component{
    constructor(props) {
        super(props);
        this.state={
            courseTabList:courseTabList
        };
    }
    onCutCourseTab(courseItem){
        return ()=>{
            for(let i = 0;i < this.state.courseTabList.length;i++){
                this.state.courseTabList[i].active = false;
            }
            courseItem.active = true;
            this.setState({
                courseTabList:this.state.courseTabList
            })
        }
    }
    render() {
        let courseTabNodes = this.state.courseTabList.map((courseItem,index)=>{
            return (
                <div className="course_introduce_sec_2_course_item"
                     onClick={this.onCutCourseTab(courseItem)}
                     key={index}
                     style={courseItem.active?courseItem.activeStyle:null}>
                    <div className="course_introduce_sec_2_course_item_top">
                        <img src={courseItem.imgUrl} alt="" className="course_introduce_sec_2_course_logo"/>
                        <div className="course_introduce_sec_2_course_item_name" style={{color:courseItem.color}}>{courseItem.title}</div>
                    </div>
                    <div className="course_introduce_sec_2_course_item_describe">
                        {courseItem.describe}
                    </div>
                </div>
            )
        });
        let courseDetailNodes = this.state.courseTabList.map((courseItem,index)=>{
            return (
                 <div className="course_introduce_sec_2_course_graph" key={index}>
                     {courseItem.active?<img src={courseItem.detailImg}
                                             className="course_introduce_sec_2_course_graph_pic"
                                             alt=""/>:null}
                 </div>
            )

        });
        let theoryNodes = theoryList.map((theoryItem,index)=>{
            let describeNodes = theoryItem.describe.map((describeItem,j)=>{
                return (
                    <div className="theory_item_bottom_describe_item" key={j}>
                        {describeItem}
                    </div>
                )
            });
            return (
                <div className="theory_item" key={index}>
                    <div className="theory_item_top">
                        <div className="theory_item_top_num">{theoryItem.order}</div>
                        <div className="theory_item_top_title">{theoryItem.title}</div>
                    </div>
                    <div className="theory_item_bottom_describe">
                        {describeNodes}
                    </div>
                </div>
            )
        });
        return (
            <div>
                <HeaderView />
                <div className="course_introduce_sec_1" />
                <div className="course_introduce_sec_2">
                    <div className="course_introduce_sec_2_content">
                        <SectionTitleView title={"VIPCODE标准K12全体系课程"}
                                          subTitle={"VIPCODE涵盖了儿童积木编程、Python语言编程、无人机及机器人编程、信息学奥赛编程、APP建构趣味编程、人工智能基础开发等课程，适合孩子6-16岁少年儿童的在小学、初中、高中全段学习（K12）。"}
                                          subTitleClassName={"course_introduce_sec_2_sub_title"}/>
                    </div>
                    <div className="course_introduce_sec_2_course_list">
                        {courseTabNodes}
                    </div>
                    {courseDetailNodes}
                </div>
                <div className="course_introduce_sec_3">
                    <div className="course_introduce_sec_3_content">
                        <SectionTitleView title={"VIPCODE六维课程设计理论"}
                                          subTitle={"VIPCODE通过对教学目标、思维模式、指令学习三个维度深刻研究，确保学员掌握每一节课的内容。通过对项目案例、课程主题、学科知识三个维度不断更新融合，让课程更受欢迎。"}
                                          subTitleClassName={"course_introduce_sec_2_sub_title"}/>

                        <div className="course_introduce_sec_3_theory">
                            <div className="course_introduce_sec_3_theory_left" />
                            <div className="course_introduce_sec_3_theory_right">
                                {theoryNodes}
                            </div>
                        </div>
                    </div>
                </div>
                <FooterView />
            </div>
        );
    }
}