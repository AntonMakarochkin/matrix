import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from 'react';
import { lazy } from 'react';

import Home from "./Pages/Home";

import "./App.css"; // глобальные стили тут

function App() {
  const History = lazy(() => import('./Pages/History'));

  return (
    <div className="App">
      <div className="header">
        <Link to="/">home</Link>
        <Link to="/history">history</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/history"
          element={
            <Suspense fallback={<h1>loading</h1>}>
              <History />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
