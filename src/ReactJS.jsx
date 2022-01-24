import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReactJS = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/redux', {
      state: {
        isActive: true,
      }
    });
  };

  return (
    <article>
      <h2>ReactJS</h2>
      <button onClick={handleOnClick}>
        Idź do Redux
      </button>
    </article>
  );
};

export default ReactJS;