/**
 * Created by Liudq on 2019/11/12
 */
import React, {Component} from 'react';
import sectionTitleViewStyle from './sectionTitleViewStyle.css';

export class SectionTitleView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section_title_content">
                <div className="section_title">
                    {this.props.title}
                </div>
                <div className="section_title_line" />
                <div className={`section_sub_title ${this.props.subTitleClassName}`}>
                    {this.props.subTitle}
                </div>
            </div>
        );
    }
}