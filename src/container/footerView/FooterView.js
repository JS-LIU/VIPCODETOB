/**
 * Created by Liudq on 2019/11/13
 */
import React, {Component} from 'react';
import footerViewStyle from './footerViewStyle.css';

export class FooterView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer_view">
                <div className="footer_content">
                    <div className="footer_left">
                        <ul className="footer_nav_list">
                           <li className="footer_nav_item">关于我们</li>
                           <li className="footer_nav_item">企业动态</li>
                           <li className="footer_nav_item">联系我们</li>
                           <li className="footer_nav_item">软件下载</li>
                        </ul>
                        <div className="web_license">
                            Copyright © 2018, VIPCODE Education and Technology Co., Ltd.（Beijing）All Rights Reserved.北京未科教育科技有限公司
                            京ICP备18000095号-1京公网安备 11010102003111号
                        </div>
                    </div>
                    <div className="footer_qr_code">
                        VIPCODE-招聘公众号
                    </div>
                </div>
            </div>
        );
    }

}