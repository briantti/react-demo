import React, { Component } from 'react';

import './index.less';

export default class Demo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgList: [
                require("./images/mw_1.jpg"),
                require("./images/mw_2.jpg"),
                require("./images/mw_3.jpg"),
                require("./images/mw_4.jpg"),
                require("./images/mw_5.jpg"),
                require("./images/mw_6.jpg"),
                require("./images/mw_7.jpg"),
                require("./images/mw_8.jpg"),
                require("./images/mw_9.jpg"),
                require("./images/mw_10.jpg"),
                require("./images/mw_11.jpg"),
                require("./images/mw_12.jpg"),
                require("./images/mw_13.jpg"),
                require("./images/mw_14.jpg"),
                require("./images/mw_15.jpg"),
                require("./images/mw_16.jpg"),
                require("./images/mw_17.jpg"),
                require("./images/mw_18.jpg"),
                require("./images/mw_19.jpg"),
                require("./images/mw_20.jpg"),
                require("./images/mw_21.jpg"),
                require("./images/mw_22.jpg"),
                require("./images/mw_23.jpg"),
                require("./images/mw_24.jpg"),
                require("./images/mw_25.jpg"),
                require("./images/mw_26.jpg"),
                require("./images/mw_27.jpg"),
                require("./images/mw_28.jpg"),
                require("./images/mw_29.jpg"),
                require("./images/mw_30.jpg"),
                require("./images/mw_31.jpg"),
                require("./images/mw_32.jpg"),
                require("./images/mw_33.jpg"),
                require("./images/mw_34.jpg"),
                require("./images/mw_35.jpg"),
                require("./images/mw_36.jpg"),
                require("./images/mw_37.jpg"),
                require("./images/mw_38.jpg"),
                require("./images/mw_39.jpg"),
                require("./images/mw_40.jpg"),
                require("./images/mw_41.jpg"),
                require("./images/mw_42.jpg"),
                require("./images/mw_43.jpg"),
                require("./images/mw_44.jpg"),
                require("./images/mw_45.jpg"),
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <ul className="img-container" ref="imgContainer" style={{
                    // transform: `translateX(${-324}px)`,
                    minWidth: `${this.state.imgList.length * 45}px`
                }}>
                    {
                        this.state.imgList.map((item,index)=>{
                        return(
                            <li className="img-item" key={index}>
                                <img src={item} alt=""/>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}