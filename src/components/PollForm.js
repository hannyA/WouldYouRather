import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate, formatQuestion } from '../utils/helpers'
import 'antd/dist/antd.css'
import { Button, Radio } from 'antd';
import { handleAnswerQuestion } from "../actions/questions"

class Question extends Component {

    state = {
        value: 0
    }

    handleClick = (e, id) => {
        e.preventDefault()
        console.log("Click box: ", id)

    }

    handleChangef = (e, option) => {
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


    handleSubmit  = (e) => {
        e.preventDefault()
        console.log('handle this submit')
        console.log('handle this submit')

        const { dispatch, id, question } = this.props
        const answer = this.state.value === 1 ? 'optionOne' : 'optionTwo'

        dispatch(handleAnswerQuestion(id, answer, question))

        this.setState({
            value:0
        })

    }

    render() {


        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
          const { value } = this.state;


        const { question } = this.props
        const {
            name, id, timestamp, optionOne, optionTwo, avatar, hasAnswered
        } = question

        let optionOneclassName = 'question poll '
        if (this.props.isActive) {
            optionOneclassName += ' menu-active';
        }
        // return <span className={className}>Menu</span>
        const plainOptions = ['Apple', 'Pear', 'Orange'];



        return (

                <div>
                    <h3 className='center'>Would you rather?</h3>
                    <div className='question'>

                        <div>
                            <img src={avatar}
                                alt={`Avatar of ${name}`}
                                className='avatar' 
                            />
                            <span>
                                <div>{name} asked:</div>
                                <div> {formatDate(timestamp)}</div>
                            </span>
                            
                        </div>
                        <form className='new-question' onSubmit={this.handleSubmit}>

                
                            <div>
                                <Radio.Group
                                            onChange={this.onChange} 
                                            value={value}>
                                    <Radio style={radioStyle} 
                                            buttonStyle="solid" 
                                            value={1}>
                                    {optionOne.text}
                                    </Radio>
                                    <Radio style={radioStyle} 
                                            buttonStyle="solid" 
                                            value={2}>
                                    {optionTwo.text}
                                    </Radio>
                                </Radio.Group>

                                <button className='btn'
                                        type='submit'
                                        disabled={false}>Submit
                            </button>

{/*                             

                        <Button block  className="question poll "
                            onClick={(e) => this.handleChange(e, 'optionOne')}>{optionOne.text}</Button>

                            <span className="question poll" onClick={(e) => this.handleChange(e, 'optionTwo')}>{optionTwo.text}</span>
                            {this.props.canSubmit 
                            ? <button className='btn'
                                        type='submit'
                                        disabled={false}>Submit
                            </button>
                            : null
                            } */}
                        </div>
                    </form>
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