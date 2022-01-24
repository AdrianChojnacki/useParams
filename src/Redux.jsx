import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Redux = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => navigate(-1);

  const isActive = Boolean(location.state && location.state.isActive);

  return (
    <article>
      <h2>Redux</h2>
      <p>Przesłana informacja isActive: {String(isActive)}</p>
      <button onClick={handleOnClick}>
        Wróć do poprzedniej strony
      </button>
    </article>
  );
};

export default Redux;