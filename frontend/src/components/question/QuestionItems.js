import React from 'react';
import { Link } from 'react-router-dom';

export default function QuestionItems({question, setQuestion}) {
  return (
    <div>
      <li>
        <Link to={`/entry/${question._id}`}><h1 onClick={() => setQuestion(question)}>{question.title}</h1></Link>
      </li>
    </div>
  );
}
