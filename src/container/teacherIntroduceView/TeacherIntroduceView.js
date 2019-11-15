/**
 * Created by Liudq on 2019/11/13
 */
import React, {Component} from 'react';
import {HeaderView} from "../headerView/HeaderView";
import {SectionTitleView} from "../sectionTitleView/SectionTitleView";
import {baseUrl} from "../../config/config";
import teacherIntroduceViewStyle from './teacherIntroduceViewStyle.css'

let teacherList = [
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_1.png",name:"李开复/课程顾问",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_2.png",name:"王昊奋/课程顾问",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_3.png",name:"张广/教研总监",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_4.png",name:"王禹川/课程研发",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_5.png",name:"苏航/C++讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_6.png",name:"金星/C++讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_7.png",name:"齐润博/Python讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_8.png",name:"李丽红/Scratch讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_5.png",name:"苏航/C++讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_6.png",name:"金星/C++讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_7.png",name:"齐润博/Python讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_8.png",name:"李丽红/Scratch讲师",title:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]}
];
let qualityTeachingList = [
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_1.png",title:"3%录取通过率",describe:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_2.png",title:"名企名校老师任职",describe:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_3.png",title:"平均3年教学经验",describe:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_4.png",title:"区分授课等级",describe:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_5.png",title:"教学环节持续优化",describe:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_6.png",title:"教学质量测评",describe:["北京理工大学计算机博士","ACM指导教师","国家自然科学基金青年基金项目"]}
];
let trainingList = [
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_1.png",title:"岗前集中培训",describe:"讲师从申请到入职的平均淘汰为70%，入职后需要经过3-6个月的集中教学培训，360度评估各项技能，严格执行验收标准"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_2.png",title:"岗前集中培训",describe:"讲师从申请到入职的平均淘汰为70%，入职后需要经过3-6个月的集中教学培训，360度评估各项技能，严格执行验收标准"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_3.png",title:"岗前集中培训",describe:"讲师从申请到入职的平均淘汰为70%，入职后需要经过3-6个月的集中教学培训，360度评估各项技能，严格执行验收标准"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_4.png",title:"岗前集中培训",describe:"讲师从申请到入职的平均淘汰为70%，入职后需要经过3-6个月的集中教学培训，360度评估各项技能，严格执行验收标准"},
];

export class TeacherIntroduceView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let teacherNodes = teacherList.map((item,index)=>{
            let titleNodes = item.title.map((titleItem,index)=>{
                return (
                    <div className="teacher_title_item" key={index}>{titleItem}</div>
                )
            });
            return (
                <div className="teacher_introduce_sec_2_teacher_item" key={index}>
                    <div className="teacher_introduce_sec_2_teacher_header">
                        <img src={item.header} className="teacher_introduce_sec_2_teacher_header_pic" alt=""/>
                    </div>
                    <div className="teacher_introduce_sec_2_teacher_name">{item.name}</div>
                    <div className="teacher_introduce_sec_2_teacher_title_list">
                        {titleNodes}
                    </div>
                </div>
            )
        });
        let qualityTeachingNodes = qualityTeachingList.map((item,index)=>{
            let describeNodes = item.describe.map((describeItem,j)=>{
                return (
                    <div className="describe_item" key={j}>
                        {describeItem}
                    </div>
                )
            });
            return (
                <div className="teacher_introduce_sec_3_quality_item" key={index}>
                    <div className="teacher_introduce_sec_3_quality_box">
                        <img src={item.imgUrl} className="teacher_introduce_sec_3_quality_pic" alt=""/>
                    </div>
                    <div className="teacher_introduce_sec_3_quality_title">
                        {item.title}
                    </div>
                    <div className="teacher_introduce_sec_3_quality_describe_list">
                        {describeNodes}
                    </div>
                </div>
            )
        });
        let trainingNodes = trainingList.map((item,index)=>{
            return (
                <div className="teacher_introduce_sec_4_training_item" key={index}>
                    <div className="teacher_introduce_sec_4_training_item_pic_box">
                        <img src={item.imgUrl} className="teacher_introduce_sec_4_training_item_pic" alt=""/>
                    </div>
                    <div className="teacher_introduce_sec_4_training_item_name">
                        {item.title}
                    </div>
                    <div className="teacher_introduce_sec_4_training_item_describe">
                        {item.describe}
                    </div>
                </div>
            )

        });
        return (
            <div>
                <HeaderView />
                <div className="teacher_introduce_sec_1" />
                <div className="teacher_introduce_sec_2">
                    <div className="teacher_introduce_sec_2_content">
                        <SectionTitleView title={"国际化的专业教学教研团队"}
                                          subTitle={"VIPCODE教研与教师老师来自世界各地的名校及名企，拥有深厚的专业背景和职业背景。"}
                                          subTitleClassName={"teacher_introduce_sec_2_sub_title"}/>
                        <div className="teacher_introduce_teacher_list">
                            {teacherNodes}
                        </div>
                    </div>
                </div>
                <div className="teacher_introduce_sec_3">
                    <div className="teacher_introduce_sec_3_content">
                        <SectionTitleView title={"全面系统把控教学质量"}
                                          subTitle={"VIPCODE教研与教师老师来自世界各地的名校及名企，拥有深厚的专业背景和职业背景。"}
                                          subTitleClassName={"teacher_introduce_sec_2_sub_title"}/>
                        <div className="teacher_introduce_sec_3_quality">
                            {qualityTeachingNodes}
                        </div>
                    </div>
                </div>
                <div className="teacher_introduce_sec_4">
                    <div className="teacher_introduce_sec_4_content">
                        <SectionTitleView title={"讲师日常培训现场"}
                                          subTitle={"VIPCODE教研与教师老师来自世界各地的名校及名企，拥有深厚的专业背景和职业背景。"}
                                          subTitleClassName={"teacher_introduce_sec_2_sub_title"}/>
                        <div className="teacher_introduce_sec_4_training">
                            {trainingNodes}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}