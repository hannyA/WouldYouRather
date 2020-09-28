import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helpers'
import 'antd/dist/antd.css'
import { Button, Radio } from 'antd';

class Question extends Component {

    state = {
        value: 0
    }

    handleClick = (e, id) => {
        e.preventDefault()
        console.log("Click box: ", id)

    }

    handleChange = (e, option) => {
        e.preventDefault()
        console.log("Click box: ", option)

        this.setState({
            answer: option
        })
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState((prevState) => ({
            
            value: prevState.value === e.target.value ? 0: e.target.value,
        }));
    };


    render() {

        const { question } = this.props
        const {
            name, id, timestamp, optionOne, optionTwo, avatar, hasAnswered
        } = question


        return (

                <div className="question" onClick={(e) => this.handleClick(e, id)}>
                    <img src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar' 
                    /> 
                    <div className='question-info'>
                        <span>{name} asked: Would you rather... </span>
                        <div> {formatDate(timestamp)}</div>    
                    </div>
                        
                    <div>
                        <span className="question poll" onClick={(e) => this.handleChange(e, 'optionOne')}>{optionOne.text}</span>
                        <span className="question poll" onClick={(e) => this.handleChange(e, 'optionTwo')}>{optionTwo.text}</span>
                        {this.props.canSubmit 
                        ? <button className='btn'
                                    type='submit'
                                    disabled={false}>Submit
                        </button>
                        : null
                        }
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

export default connect(mapStateToProps)(Question)