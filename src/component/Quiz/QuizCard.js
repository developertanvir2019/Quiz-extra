import React from 'react';
import './QuizCart.css'

const QuizCard = ({ ques }) => {
    const { question, options, correctAnswer } = ques;
    return (
        <div className='question container'>
            <h4>{question}</h4>
            {options.map(single => <p key={single}>{single}</p>)}
        </div>
    );
};

export default QuizCard;