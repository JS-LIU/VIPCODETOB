/**
 * Created by Liudq on 2019/11/11
 */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import headerNavViewStyle from './headerNavViewStyle.css';

let defHeaderNavActiveItem = "header_nav_active_item";
let defHeaderNavItem = "header_nav_item";
export class HeaderNavView extends Component{
    constructor(props) {
        super(props);
        let headerNavList = this.setHeaderNavList(this.props.headerNavConfig.headerNavList);
        this.state = {
            activeClassName:defHeaderNavActiveItem,
            itemClassName:defHeaderNavItem,
            headerNavList:headerNavList,
            headerNavListClassName:this.props.headerNavConfig.headerNavListClassName
        }
    }
    componentDidMount() {
        let propsHeaderNavConfig = this.props.headerNavConfig;
        let activeClassName = propsHeaderNavConfig.activeClassName || defHeaderNavActiveItem;
        let itemClassName = propsHeaderNavConfig.itemClassName || defHeaderNavItem;
        this.setState({
            itemClassName:itemClassName,
            activeClassName:activeClassName
        })
    }

    cutActiveNav(item){
        return ()=>{
            for(let i = 0;i < this.state.headerNavList.length;i++){
                this.state.headerNavList[i].active = false;
            }
            item.active = true;
            if(typeof item.action === "function"){
                item.action.call(this,item);
            }
        }
    }
    setHeaderNavList(propsHeaderNavList){
        let headerNavList = [];
        for(let i = 0;i < propsHeaderNavList.length;i++){
            headerNavList.push(Object.assign({cutActiveNav:this.cutActiveNav.bind(this)},propsHeaderNavList[i]));
        }
        return headerNavList;
    }

    render() {
        let headerNavNodes = this.state.headerNavList.map((item,index)=>{
            return (
                <Link to={item.link}
                      key={index}
                      className={`${this.state.itemClassName} ${item.active?this.state.activeClassName:""}`}
                      onClick={item.cutActiveNav(item)}>
                    {item.name}
                </Link>
            )
        });
        return (
            <div className={`header_nav ${this.state.headerNavListClassName}`}>
                {headerNavNodes}
            </div>
        );
    }
}