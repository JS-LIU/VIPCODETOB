/**
 * Created by Liudq on 2019/11/11
 */
import React, {Component} from 'react';
import {baseUrl} from "../../config/config";

let defLogoPath = '/src/img/vipcode_logo.png';
let logo_style = {
    width:"268px",
    height:"80px",

    display:"flex",
    flex:"row",
    justifyContent:"center",
    alignItems:"center"
};
let logo_img_style = {
    width:"268px",
    height:"48px"
};


export class LogoView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            style:logo_style,
            logoPath:defLogoPath,
            logoImgStyle:logo_img_style
        }
    }
    componentDidMount() {
        let style = Object.assign({},this.state.style,this.props.style);
        let logoPath = this.props.logoPath || defLogoPath;
        let logoImgStyle = Object.assign({},this.state.logoImgStyle,this.props.logoImgStyle);
        this.setState({
            style:style,
            logoPath:logoPath,
            logoImgStyle:logoImgStyle
        });
    }

    render() {
        return (
            <div style={this.state.style}>
                <img src={baseUrl.getBaseUrl() +this.state.logoPath} alt="" style={this.state.logoImgStyle}/>
            </div>
        );
    }
}