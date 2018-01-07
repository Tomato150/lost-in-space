import React, {Component} from 'react';
import EventPhase from './game-event'
import ManagementPhase from './game-management'

export default class GameCore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to_render: "EventPhase",
        }
    }

    toggleCurrentPhase() {
        if (this.state.to_render === "EventPhase") {
            this.setState({to_render: "ManagementPhase"});
        } else {
            this.setState({to_render: "EventPhase"});
        }
    }

    render() {
        if (this.state.to_render === "EventPhase"){
            return <EventPhase/>
        } else if (this.state.to_render === "ManagementPhase") {
            return <ManagementPhase/>
        }
    }
}