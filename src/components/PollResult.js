import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helpers'

import 'antd/dist/antd.css';
import { Progress } from 'antd';

class PollResult extends Component {
    render() {

    const { question } = this.props

    const {
        name, id, timestamp, optionOne, optionTwo, avatar, response, hasAnswered
    } = question

    const voteOneCount = optionOne.votes.length
    const voteTwoCount = optionTwo.votes.length
    const sum = voteOneCount + voteTwoCount


    const oneClassname = response === 'optionOne' 
        ? 'selected-answer' 
        : ''
        const twoClassname = response === 'optionTwo' 
            ? 'selected-answer' 
            : ''


        return (


            <div>
                <h3>Poll Result</h3>

                <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar' 
                    /> 
                    <div className='question-info'>
                        <span>{name} asked: Would you rather... </span>
                        <div> {formatDate(timestamp)}</div>    
                    </div>
                        


                    <div className='container'>
                        
                        <div className={oneClassname}>
                            <span className=''>{optionOne.text}</span>
                            {voteOneCount} / {sum}
                            <Progress strokeWidth='40px' percent={(voteOneCount/sum) * 100} />
                        </div>

                        <div className={twoClassname}>
                            <span className=''>{optionTwo.text}</span>
                            {voteTwoCount} / {sum}
                            <Progress strokeWidth='40px' percent={(voteTwoCount/sum) * 100} />
                        </div>

                    </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {

    const question = questions[id]
    
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}


export default connect(mapStateToProps)(PollResult)

