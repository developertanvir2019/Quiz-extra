import React from 'react';
import './QuizCart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizCard = ({ ques }) => {
    const { question, options, correctAnswer } = ques;

    const handleToast = (e) => {
        if (e === correctAnswer) {
            alert('Your answer is correct')
        }
        else {
            alert('Wrong answer')
        }
    }
    return (
        <div className='question container'>
            <h4>{question}</h4>
            {options.map(single => <p onClick={(e) => handleToast(e.target.innerText)} key={single}>{single}</p>)}
        </div>
    );
};

export default QuizCard;