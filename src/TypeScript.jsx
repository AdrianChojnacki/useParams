import React from 'react';
import { useParams } from 'react-router-dom';

const TypeScript = () => {
  const paramsObject = useParams();

  console.log(paramsObject);

  return (
    <article>
      <h2>TypeScript</h2>
      <p></p>
    </article>
  );
};

export default TypeScript;