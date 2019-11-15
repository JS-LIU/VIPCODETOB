/**
 * Created by Liudq on 2019/11/12
 */
import React, {Component} from 'react';
import {HeaderView} from "../headerView/HeaderView";
import {baseUrl} from "../../config/config";
import {SectionTitleView} from "../sectionTitleView/SectionTitleView";
import {FooterView} from "../footerView/FooterView";

import doubleTeacherCourseViewStyle from './doubleTeacherCourseViewStyle.css';

export class DoubleTeacherCourseView extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HeaderView />
                <div className="double_teacher_sec_1" />

                <div className="double_teacher_sec_2">
                    <div className="double_teacher_sec_2_content">
                        <SectionTitleView title={"少儿编程合理科学的上课模式-双师模式"}
                                          subTitle={"VIPCODE采用O2O双师互动课堂，将线上线下教学模式相结合，采用科技驱动教育、直播互动教学的课堂形式，真正做到让学习更有效。"}
                                          subTitleClassName={"sec_2_sub_title"}/>
                        <div className="sec_2_teach_way_box">
                            <div className="online_teach">
                                <div className="teach_pic_info">
                                    <div className="teach_pic_title">VIPCODE名师授课</div>
                                    <div className="teach_pic_sub_title">一线名企名校老师在线直播授课，实时互动讲解。</div>
                                </div>
                            </div>
                            <div className="assistant_teach">
                                <div className="teach_pic_info">
                                    <div className="teach_pic_title">机构助教现场指导答疑</div>
                                    <div className="teach_pic_sub_title">协助授课、实时答疑激励、辅导跟进。向老师反馈孩子学习情况。</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="double_teacher_sec_3">
                    <SectionTitleView title={"“5+5+5”高精度课堂模型"}
                                      subTitle={"VIPCODE双师课堂将整个授课过程巧妙合理的分成“5+5+5”模型。让每一个环节更清晰明确，保障孩子学习效果。"}
                                      subTitleClassName={"sec_2_sub_title"}/>
                    <img src={baseUrl.getBaseUrl()+"/src/img/double_teacher_sec_3_module.png"}
                         className="excellent_course" alt=""/>
                </div>
                <div className="double_teacher_sec_4">
                    <SectionTitleView title={"5E教学法-让孩子主动学习"}
                                      subTitle={"VIPCODE采用建构主义教学模式：5E教学法，将课堂的主动权还给学生，孩子积极主动参与课堂活动，课程更受欢迎学习效果更好。"}
                                      subTitleClassName={"sec_2_sub_title"}/>
                </div>
                <div className="double_teacher_sec_5">
                    <SectionTitleView title={"传统课堂对比现代双师课堂"}
                                      subTitle={"相较于传统课堂，双师课堂在成本、管理、师资、教研、服务、课堂效果等方面拥有绝对优势"}
                                      subTitleClassName={"sec_2_sub_title"}/>
                    <img src={baseUrl.getBaseUrl()+"/src/img/double_teacher_comparison.png"}
                         className="comparison" alt=""/>
                </div>
                <FooterView />
            </div>
        );
    }
}