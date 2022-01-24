import React from 'react';
import { useParams } from 'react-router-dom';

const TypeScript = () => {
  const { info } = useParams();

  return (
    <article>
      <h2>TypeScript</h2>
      <p>{info}</p>
    </article>
  );
};

export default TypeScript;