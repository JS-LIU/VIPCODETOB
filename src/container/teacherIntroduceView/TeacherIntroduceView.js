/**
 * Created by Liudq on 2019/11/13
 */
import React, {Component} from 'react';
import {HeaderView} from "../headerView/HeaderView";
import {SectionTitleView} from "../sectionTitleView/SectionTitleView";
import {baseUrl} from "../../config/config";
import teacherIntroduceViewStyle from './teacherIntroduceViewStyle.css'
import {FooterView} from "../footerView/FooterView";

let teacherList = [
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_1.png",name:"李开复/课程顾问",title:["创新工场CEO","人工智能科学博士","原谷歌中国/微软全球副总裁"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_2.png",name:"王昊奋/课程顾问",title:["华东理工大学讲师","上海交大计算机应用专业博士","WWW、ISWC等程序委员会委员"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_3.png",name:"张广/教研总监",title:["原美股上市集团教学督导（VP）"," 国内多所高校客座教授","和特聘专家","高等教育出版社教材编委会主编"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_4.png",name:"王禹川/课程研发",title:["14年IT编程教学经验"," 北京航空航天大学客座教授","原美股上市公司少儿编程","教学负责人"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_5.png",name:"苏航/C++讲师",title:["同济大学电子工程硕士 ","原教育机器人公司","课程研发负责人","少儿编程畅销读物作者"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_6.png",name:"金星/C++讲师",title:["清华附中特聘信息学教师"," ACM亚洲区金牌获奖者","历年NOIP优秀指导老师"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_7.png",name:"齐润博/Python讲师",title:["中国计算机学会会员","剑桥国际课程认证教师","国际学校双语编程课程研发老师"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_8.png",name:"李丽红/Scratch讲师",title:["北京邮电大学硕士","15年算法工程师","NOIP特聘金牌讲师"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_9.png",name:"苏航/C++讲师",title:["北京工业大学硕士生导师","10年计算机专业课程讲师","北京工业大学ACM竞赛队指导老师"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_10.png",name:"金星/C++讲师",title:["《给孩子看的Scratch编程起点","书》主编","前新东方教育产品经理STEAM","创客科普作家"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_11.png",name:"齐润博/Python讲师",title:["中央民族大学教育技术硕士","中科院人工智能与","机器人教育实验课程设计师"]},
    {header:baseUrl.getBaseUrl()+"/src/img/teacher_header_12.png",name:"李丽红/Scratch讲师",title:["少儿编程“网红”讲师","5年少儿编程授课经验","原美股上市公司编程课程","研发经理"]}
];
let qualityTeachingList = [
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_1.png",title:"3%录取通过率",describe:["VIPCODE讲师上线前需经过课程理解、教学环节、课堂把控、授课风格等方面培训及考核。综合通过率不到3%。"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_2.png",title:"名企名校老师任职",describe:["VIPCODE讲师均来自国内外一线互联网名企及知名院校，教育及编程相关专业毕业。"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_3.png",title:"平均3年教学经验",describe:["VIPCODE讲师平均拥有3年及以上教学经验，更能够掌握课堂节奏，更熟悉学生情况。"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_4.png",title:"区分授课等级",describe:["根据学生的年级年龄、学习方向及掌握程度，由不同特点的老师进行授课，确保教学效果。"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_5.png",title:"教学环节持续优化",describe:["根据学员每节课课堂表现及掌握情况，教学组会再和课中及时优化教学方式、教学环节以及教学内容。"]},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/quality_pic_6.png",title:"教学质量测评",describe:["根据学生、校区、质检小组对主讲老师每周打分及评价，实时掌握和监督主讲老师授课质量并及时改进优化。"]}
];
let trainingList = [
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_1.png",title:"岗前集中培训",describe:"讲师从申请到入职的平均淘汰为70%，入职后需要经过3-6个月的集中教学培训，360度评估各项技能，严格执行验收标准"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_2.png",title:"讲师技能提升讲座",describe:"通过校区反馈及家长评价及时调整授课流程及细节，定期举办讲师总结分享会及各项专项讲座，不断提成教师能力及教学质量。"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_3.png",title:"讲师培训师进班监课",describe:"培训师定期进入各校区，检查课堂教学现场情况，其中包括教具设备设置、主讲授课、助教辅导情况等"},
    {imgUrl:baseUrl.getBaseUrl()+"/src/img/training_4.png",title:"明星讲师进校示范",describe:"人气讲师会根据校区情况，进行驻校培训示范。手把手全程辅导教学全流程，确保校区授课与服务效果"},
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
                                          subTitle={"VIPCODE通过严格筛选、层层把关，并经过一系列严格的专业培训，确保每一位教学老师素质与能力。"}
                                          subTitleClassName={"teacher_introduce_sec_2_sub_title"}/>
                        <div className="teacher_introduce_sec_3_quality">
                            {qualityTeachingNodes}
                        </div>
                    </div>
                </div>
                <div className="teacher_introduce_sec_4">
                    <div className="teacher_introduce_sec_4_content">
                        <SectionTitleView title={"讲师日常培训现场"}
                                          subTitle={"VIPCODE拥有讲师全流程培训体系，从岗前培训到能力拓展，从日常督导到驻校示范，确保讲师及教学效果质量。"}
                                          subTitleClassName={"teacher_introduce_sec_2_sub_title"}/>
                        <div className="teacher_introduce_sec_4_training">
                            {trainingNodes}
                        </div>
                    </div>
                </div>
                <FooterView />
            </div>
        );
    }

}