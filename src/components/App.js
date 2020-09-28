import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared"
import DashBoard from "./DashBoard"
import Poll from './Poll'
import NewPoll from './NewPoll'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    
    render() {
        return (
            <div>
                {this.props.loading === true
                    ? null
                    : <NewPoll />
                }
                
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {

    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)