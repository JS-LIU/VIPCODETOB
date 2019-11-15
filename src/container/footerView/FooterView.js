/**
 * Created by Liudq on 2019/11/13
 */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import footerViewStyle from './footerViewStyle.css';

export class FooterView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer_view">
                <div className="footer_content">
                    <div className="footer_top">
                        <div className="footer_nav_list">
                           <Link to="/home" className="footer_nav_item">首页</Link>
                           <Link to="/doubleTeacherCourse" className="footer_nav_item">企业动态</Link>
                           <Link to="/courseIntroduce" className="footer_nav_item">联系我们</Link>
                           <Link to="/teacherIntroduce" className="footer_nav_item">师资介绍</Link>
                        </div>
                        <div className="footer_qr_code">
                            <span>合作联系</span>
                            <span style={{color:"#02B3E4"}}>hello@vipcode.com</span>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="web_license">
                            Copyright © 2018, VIPCODE Education and Technology Co., Ltd.（Beijing）All Rights Reserved.北京未科教育科技有限公司
                            京ICP备18000095号-1京公网安备 11010102003111号
                        </div>
                        <div className="select_address" />
                    </div>
                </div>
            </div>
        );
    }
}