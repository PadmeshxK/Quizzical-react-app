import Question from './Question'
import './style.css'

export default function QuestionsPage(props){
    const questions = props.questions
    const questionsElement = questions.map((question,index) => (
       <Question 
            key ={index} 
            {...question} 
            id={index}
            handleChange={props.handleChange}
            changeListen={questions}
            setAnswersArr={props.setAnswersArr}
            completionState={props.quizCompletionState}
            answerInd={props.answersArr[index]}
            userAnswerInd={props.userAnswers[index]}
       /> 
    ))

    return(
        <div className="page-2">
            <div className='questions-wrapper'>
                {questionsElement}
            </div>
            <footer>
                {
                    props.quizCompletionState === 'displayError' && <p className='alert'>Opps fill the form bruh</p>
                }
                {
                    props.quizCompletionState === true && <p className='submitted'>You scored {props.scoreCounter()}/5 correct answers</p>
                }
                <button className='check-btn' onClick={props.handleSubmit}>{props.quizCompletionState === true?'Go again!':"Check answers"}</button>
            </footer>
                 
        </div>
    )
}