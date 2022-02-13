import React from "react";
import "./Tab.less";
import { Global } from "../../models/Global";

export interface TabProps { }

export interface TabState {
    selectedIndex: number;
    selectList: {
        img: string;
        imgSelect: string;
        name: string;
        path: string;
    }[];
}

export class Tab extends React.Component<TabProps, TabState> {
    state: TabState = {
        selectedIndex: -1, //不显示为-1，1~其他数字为下标
        selectList: [
            {
                img: "/src/components/Tab/assets/home1.jpg",
                imgSelect: "/src/components/Tab/assets/home1-visited.png",
                name: "主页",
                path: "home",
            },
            {
                img: "/src/components/Tab/assets/find1.jpg",
                imgSelect: "/src/components/Tab/assets/find1-visited.png",
                name: "发现",
                path: "discover",
            },
            {
                img: "/src/components/Tab/assets/other.jpg",
                imgSelect: "/src/components/Tab/assets/other.jpg",
                name: "其他",
                path: "other",
            },
            {
                img: "/src/components/Tab/assets/community1.jpg",
                imgSelect: "/src/components/Tab/assets/community1-visited.png",
                name: "社区",
                path: "community",
            },
            {
                img: "/src/components/Tab/assets/personal1.jpg",
                imgSelect: "/src/components/Tab/assets/personal1-visited.png",
                name: "我的",
                path: "mine",
            },
        ],
    };

    //装载完成
    componentDidMount() {
        //调用
        this.getPathIndex();
        Global.history.listen(() => {
            this.getPathIndex();
        });
    }

    //获取路径下标
    getPathIndex() {
        //获取路径
        let gethref = Global.href.replace("#/", "");
        this.state.selectedIndex = this.state.selectList.findIndex((v) => {
            v.path = gethref;
        });
        document.getElementById("main").style.marginBottom =
            this.state.selectedIndex === -1 ? "0px" : "166px";
        this.forceUpdate();
    }

    render() {
        return (
            <div
                className="Tab"
                style={{ display: this.state.selectedIndex === -1 ? "none" : "" }}
            >
                {this.state.selectList.map((v, i) => {
                    <div className="function_Banner"
                        key={i} onClick={()=>{
                            Global.history.push(
                                "/"+this.state.selectList[i].path
                            )
                        }}>
                            <div className="function_Img">
                                {this.state.selectedIndex===i?(
                                    <img src={v.imgSelect} alt=""/>
                                    ):(
                                        <img src={v.imgSelect} alt=""/>
                                    )
                                }
                            </div>
                        <div className="function_Name">{v.name}</div>
                    </div>
                })
                }
            </div>
        );
    }
}
