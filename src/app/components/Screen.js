import React, {Component} from 'react';

import LinearProgress from 'material-ui/LinearProgress';

import PageBottleBackground from './PageBottleBackground/PageBottleBackground';

export default class Screen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            completed: 0,
        };

        setTimeout(function() {
            window.location = "/#/login";
        }, 3000);

    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 100);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 100);
        }
    }

    render(){

        return (
            <PageBottleBackground>
                <div className="wrap-user-data">

                    <LinearProgress mode="determinate" value={this.state.completed} color="Teal"/>

                </div>
            </PageBottleBackground>
        )
    }
}