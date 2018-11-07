import React from 'react';

export default function QuestionItems({question}) {
  return (
    <div>
      <li>
      <h1>{question.title}</h1>
      </li>
    </div>
  );
}
