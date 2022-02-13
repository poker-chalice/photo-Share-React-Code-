import React from 'react';
import { Link } from 'react-router-dom';
import './accountView.less';

export interface accountViewProps extends React.Props<any> {

}

export interface accountViewState {

}

export default class accountView extends React.Component<accountViewProps,accountViewState>{

    state: accountViewState = {

    };

    render() {
        return(
        <div className="container">
        <header>
        </header>
        <section>
        </section>
        <footer></footer>
   </div>)

    }
}