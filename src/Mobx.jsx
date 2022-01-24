import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mobx = () => {
  const [inputData, setInputData] = useState('');

  const navigate = useNavigate();

  const handleOnChange = event => setInputData(event.target.value);

  const handleOnClick = () => {
    navigate(`/typescript/${inputData}`);
  }

  return (
    <article>
      <h2>MobX</h2>
      <input
        onChange={handleOnChange}
        type="text"
      />
      <button onClick={handleOnClick}>
        Wyślij params do TypeScript
      </button>
    </article>
  );
};

export default Mobx;
