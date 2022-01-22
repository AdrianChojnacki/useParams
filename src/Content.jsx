import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Mobx from './Mobx.jsx';
import ReactJS from './ReactJS';
import Redux from './Redux';
import TypeScript from './TypeScript';

const Content = () => {
  return (
    <main>
      <Routes>
        <Route element={<Mobx/>} path="/mobx" />
        <Route element={<ReactJS/>} path="/react" />
        <Route element={<Redux/>} path="/redux" />
        <Route element={<TypeScript/>} path="/typescript" />
        <Route element={<Navigate from="*" to="/" />} />
      </Routes>
    </main>
  );
};

export default Content;
