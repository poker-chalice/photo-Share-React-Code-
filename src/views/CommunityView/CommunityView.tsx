import React from 'react';
import './CommunityView.less';

export interface CommunityViewProps extends React.Props<any> {

}

export interface CommunityViewState {

}

export default class CommunityView extends React.Component<CommunityViewProps, CommunityViewState>{

    render() {
        return (
            <div className="TestView">
                <div className="head">
                    <div className="time">9:40</div>
                    <img className="icon-1" />
                    <img className="icon-2" />
                    <img className="icon-3" />
                </div>
                <div className="circle">
                    <div className="c1"></div>
                    <div className="c2"></div>
                </div>
                <h1>Recharge money</h1>
                <p className="p1">Source: Wells Fargo</p>
                <p className="p2">Choose wallet</p>
                <div className="dialog">
                    <div className="top">
                        <div className="left">
                            <p className="wallet">USD wallet</p>
                            <p className="num">1234 5678 9102 2449</p>
                        </div>
                        <div className="right">
                            <img />
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="bottom">
                        <img />
                        <p className="p1">Available balance</p>
                        <p className="p2">$ 12,000</p>
                    </div>
                </div>
                <p className="p3">Recharge</p>
                <div className="amount">amount</div>
                <div className="garyLine"></div>
                <div className="rectangle">
                    <div>$ 10</div>
                    <div>$ 100</div>
                    <div>$ 200</div>
                    <div>$ 300</div>
                </div>
                <div className="continue">Continue</div>
                <div className="blackLine"></div>
            </div>
        )
    }

}