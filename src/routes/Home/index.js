import React, {Component} from 'react';

import './index.less';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);

    }
    componentDidMount() {
        let imgs_div=document.getElementById("imgs");
        let imgsUl=imgs_div.getElementsByTagName("ul")[0];
        console.log('imgs_div',imgs_div)
        console.log('imgsUl',imgsUl)
    }

    render() {
        return (
            <div>
                {/*<div className='customer-video-wrapper' onClick={this.props.onClick}>*/}
                {/*    <div className="img-wrapper">*/}
                {/*        <img src={require('./images/exhibition_banner.png')} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="switch-pause-content">*/}
                {/*        <div className="big-video-top-text">入门教程</div>*/}
                {/*        <div className="big-video-bottom-text">学会艺维云展 只需10分钟</div>*/}
                {/*        <div className="switch-pause-play-wrapper" onClick={()=>this.refs.audioWrapper.play()}>*/}
                {/*            <div className="switch-pause-play"></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<audio ref="audioWrapper" controls="controls" controlsList="nodownload"*/}
                {/*       src="https://www.foxmovies.com/s3/dev-temp/en-US/podcasts/__5bd78efdb03bf_Fox_Trailer_FINAL.mp3"></audio>*/}
                <div className="banner-wrapper" id="wrapper">
                    <div className="images-wrap" id="imgs">
                        <ul className="nav-ul">
                            <li><img src={require('./images/exhibition_banner.png')} alt=""/></li>
                            <li><img src={require('./images/exhibition_banner.png')} alt=""/></li>
                            <li><img src={require('./images/exhibition_banner.png')} alt=""/></li>
                            <li><img src={require('./images/exhibition_banner.png')} alt=""/></li>
                            <li><img src={require('./images/exhibition_banner.png')} alt=""/></li>
                            <li><img src={require('./images/exhibition_banner.png')} alt=""/></li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                    <div className="nav-dot" id="nav">
                        <ul className="list-content">
                            <li><a className="current">1</a></li>
                            <li><a>2</a></li>
                            <li><a>3</a></li>
                            <li><a>4</a></li>
                        </ul>
                    </div>
                    <div ref="preous"></div>
                    <div ref="next"></div>
                </div>
            </div>
        )
    }
}