/**
 * Created by Liudq on 2019/11/12
 */
import React, {Component} from 'react';

let defLoginBtnText = "教师登录";
let login_btn_style = {
    width:"126px",
    height:"38px",

    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",

    fontSize:"16px",
    color:"#00BAFF",
    cursor:"pointer",

};
export class HeaderLoginView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginBtnText:"",
            loginBtnStyle:login_btn_style
        }
    }
    componentDidMount() {
        let loginBtnText = this.props.loginBtnText || defLoginBtnText;
        let loginBtnStyle = Object.assign({},this.state.loginBtnStyle,this.props.loginBtnStyle);
        this.setState({
            loginBtnText:loginBtnText,
            loginBtnStyle:loginBtnStyle
        })
    }

    render() {
        return (
            <div style={this.state.loginBtnStyle}>
                {this.state.loginBtnText}
            </div>
        );
    }
}