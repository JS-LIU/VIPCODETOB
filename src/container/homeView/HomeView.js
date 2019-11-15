/**
 * Created by Liudq on 2019/11/11
 */
import React, {Component} from 'react';
import {HeaderView} from "../headerView/HeaderView";
import {SectionTitleView} from "../sectionTitleView/SectionTitleView";
import {baseUrl} from "../../config/config";
import homeViewStyle from './homeViewStyle.css';

let solveList = [
    "品牌、产品全面授权", "标准运营流程培训",
    "各项赛事合作服务","课堂技术服务支持","本地教师进修培训","优质资源导流推荐","标准全套课程体系",
    "人力管理协助支持","品牌活动联动支持","统一编程学习平台","一对一教练式指导","持续服务升级.....",
    "全系列视觉识别设计"
];
let businessMovementList = [
    {title:"徐小平老师邀请您加入VIPCODE",style:{width:"680px",background:"url('"+baseUrl.getBaseUrl()+"/src/img/xxp_invited_pic.png"+"') no-repeat center"}},
    {title:"VIPCODE在线少儿编程产品矩阵战略升级，“未科编程网校”正式上线",style:{width:"480px",background:"url('"+baseUrl.getBaseUrl()+"/src/img/vip_online_pic.png"+"') no-repeat center"},textStyle:{width:"411px"}},
    {title:"开复老师力荐VIPCODE",style:{width:"480px",background:"url('"+baseUrl.getBaseUrl()+"/src/img/lkf_invited_pic.png"+"') no-repeat center"}},
    {title:"VIPCODE获数千万天使轮投资，打造线上少儿编程第一品牌",style:{width:"680px",background:"url('"+baseUrl.getBaseUrl()+"/src/img/vip_pre_a.png"+"') no-repeat center"},textStyle:{width:"350px"}},
];
let honorList = [
    baseUrl.getBaseUrl()+"/src/img/tencent_logo.png",
    baseUrl.getBaseUrl()+"/src/img/wangyi_logo.png",
    baseUrl.getBaseUrl()+"/src/img/pencil_logo.png"
];
let cooperativeAgencyList = [
    baseUrl.getBaseUrl()+"/src/img/cooperative_1.png",
    baseUrl.getBaseUrl()+"/src/img/cooperative_2.png",
    baseUrl.getBaseUrl()+"/src/img/cooperative_3.png",
    baseUrl.getBaseUrl()+"/src/img/cooperative_4.png",
    baseUrl.getBaseUrl()+"/src/img/cooperative_5.png",
    baseUrl.getBaseUrl()+"/src/img/cooperative_6.png"
];
export class HomeView extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        let solveNodes = solveList.map((item,index)=>{
            return (
                <div key={index} className="sec_4_solve_item">
                    {item}
                </div>
            )
        });
        let businessMovementNodes = businessMovementList.map((item,index)=>{
            return (
                <div key={index} className="movement_item" style={item.style}>
                    <div className="movement_detail" style={item.textStyle}>{item.title}</div>
                </div>
            )
        });
        let honorNodes = honorList.map((item,index)=>{
            return (
                <img src={item} key={index} />
            )
        });
        let cooperativeAgencyNodes = cooperativeAgencyList.map((item,index)=>{
            return(
                <img src={item} alt="" key={index}/>
            )
        });
        return (
            <div>
                <HeaderView />
                <div className="home_sec_1">
                    <div className="home_sec_1_content">
                        <div className="home_sec_1_more">了解详情</div>
                    </div>
                </div>
                <div className="home_sec_2">
                    <div className="home_sec_2_content">
                        <div className="home_sec_2_increase_introduce">
                            <div className="home_sec_2_increase_introduce_subtitle">
                                少儿编程—教育发展大趋势
                            </div>
                            <div className="home_sec_2_increase_introduce_title">
                                少儿编程，将会成为下一代“少儿英语”
                            </div>
                            <div className="home_sec_2_increase_introduce_detail">
                                尽管国内的少儿编程教育起步较晚，但自2015年以来关注热度有了明显的提升。发展至今已经有百亿级别市场规模。根据市场发展、行业增长规律级同教育类型比较，结合国家政策扶持，预计3-5年少儿编程的市场规模将超过500亿，十年之内将赶超英语，成为未来世界的“通用”语言。
                            </div>
                        </div>
                        <div className="hone_sec_2_increase_pic" />
                    </div>
                </div>
                <div className="home_sec_3">
                    <SectionTitleView title={"紧抓红利，依托政府好政策"}
                                      subTitle={"从2015年起，国家把发展人工智能作为提升国家竞争力的重大战略，中国开始积极推进少儿编程教育，政策红利的释放无疑加快了编程教育行业的发展。"}
                                      subTitleClassName={"home_sec_3_sub_title"}/>

                </div>
                <div className="home_sec_4">
                    <div className="home_sec_4_content">
                        <SectionTitleView title={"少儿编程双师课堂—壹站式合作解决方案"}
                                          subTitle={"面临竞争，你的企业将成为创新的颠覆者，还是被新的技术所颠覆？员工是企业创新和颠覆的核心力量。为他们提供实用、前沿的技术培训，让他们驱动企业的创新和突破，成为企业持续性增长的关键动力。"}
                                          subTitleClassName={"home_sec_3_sub_title"}/>
                        <ul className="home_sec_4_solve_way">
                            <li className="home_sec_4_solve_way_title">
                                <div className="home_sec_4_solve_way_title_item home_sec_4_solve_way_title_left">产品&技术支持</div>
                                <div className="home_sec_4_solve_way_title_item home_sec_4_solve_way_title_center">培训&运营支持</div>
                                <div className="home_sec_4_solve_way_title_item home_sec_4_solve_way_title_right">活动&服务支持</div>
                            </li>
                            <li className="home_sec_4_solve_list">
                                {solveNodes}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="home_sec_5"></div>
                <div className="home_sec_6">
                    <div className="home_sec_6_content">
                        <SectionTitleView title={"企业动态"}/>
                        <div className="business_movement">
                            {businessMovementNodes}
                        </div>
                    </div>
                </div>
                <div className="home_sec_7">
                    <div className="home_sec_7_content">
                        <SectionTitleView title={"企业动态"}/>
                        <div className="honor_list">
                            {honorNodes}
                        </div>
                        <div className="cooperative_agency">
                            <div className="cooperative_agency_title">
                                未科编程·合作机构
                            </div>
                            <div className="cooperative_agency_list">
                                {cooperativeAgencyNodes}
                            </div>
                            <div className="cooperative_agency_btn">关于我们</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}