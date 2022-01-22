import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReactJS = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    const location = {
      pathname: '/redux',
      state: {
        isActive: true,
      }
    };

    navigate(location);
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