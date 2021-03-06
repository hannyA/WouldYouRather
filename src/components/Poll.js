import React, { Component } from "react"
import PollForm from './PollForm'
import PollResult from "./PollResult"
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'

// Component presents a poll form if user needs to answer
// else if users answered shows the results
class Poll extends Component {
    render() {
        const {id, hasAnswered } = this.props

        console.log('id', id)
        console.log('hasAnswered', hasAnswered)
        // const {
        //     name, id, timestamp, optionOne, optionTwo, avatar, response, hasAnswered
        // } = question

        return (
            <div className=''>

                { id === null ?  <div> 404 Question does not exist</div> :
                    hasAnswered === true
                    ? <PollResult id={id} canSubmit={false} />
                    : <PollForm id={id} canSubmit={true} />

                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {

    const {id} = props.match.params
    console.log('id', id)

    const question = questions[id]
    console.log('questions', questions)

    console.log('question is:', question)
    
    if (question === null || question === undefined) { return {id: null} }

    const {hasAnswered} = formatQuestion(question, users[question.author], authedUser)

    return {
        id,
        hasAnswered
    }
}

export default connect(mapStateToProps)(Poll)