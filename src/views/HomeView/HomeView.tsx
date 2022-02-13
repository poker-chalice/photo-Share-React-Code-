import React from 'react';
import { Link } from 'react-router-dom';
import './HomeView.less';

export interface HomeViewProps extends React.Props<any> {

}

export interface HomeViewState {
    
}

export default class HomeView extends React.Component<HomeViewProps, HomeViewState>{

    state: HomeViewState = {

    };

    render() {
        return (
            <div className='HomeView'>
                <header>
                    <div className="time_Banner"></div>
                    <div className="home_Banner">
                        <div className="showGps">
                            <div className="Gpslogo">
                                <img src={require("./assets/gpsLogo2.jpg")} alt="" />
                            </div>
                            <div className="gps_Place">深圳</div>
                        </div>
                        <div className="search_Function">
                            <div className="search_Banner">
                                <div className="search_Logo">
                                    <img src={require("./assets/search2.jpg")} alt="" />
                                </div>
                                <input/>
                            </div>
                        </div>
                        <div className="class_Kind">
                            <img src={require("./assets/class_Kind2.jpg")} alt=""/>
                        </div>
                        <div className="vedioUse">
                            <img src={require("./assets/vedio2.jpg")} alt=""/>
                        </div>
                    </div>
                    <div className="advImg">
                        <img src={require("./assets/home_banner.jpg")} alt="" />
                    </div>
                </header>
                <section>
                    <div className="function_Banner">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="live_function">
                        <a>
                            <img className="function_Img"></img>
                            <div className="text_describe"></div>
                        </a>
                        <a>
                            <img className="function_Img"></img>
                            <div className="text_describe"></div>
                        </a>
                        <a>
                            <img className="function_Img"></img>
                            <div className="text_describe"></div>
                        </a>
                        <a>
                            <img className="function_Img"></img>
                            <div className="text_describe"></div>
                        </a>
                    </div>
                    <div className="hot_Recommend"></div>
                    <div className="inspirationOrStory">

                    </div>
                    <div className="hot_PictureCollect"></div>
                </section>
                <footer>

                </footer>
            </div>
        )
    }
}