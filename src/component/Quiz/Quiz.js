import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Quiz = () => {
    const data = useLoaderData().data;
    const { name, questions } = data;
    return (
        <div>

            <h1 className='text-danger py-2'>Quiz of {name}</h1>
            {
                questions.map(question => <QuizCard key={question.id} ques={question}></QuizCard>)
            }

        </div>
    );
};

export default Quiz;