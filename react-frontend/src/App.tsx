import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import QueryOpenings from './query_openings';
import QueryResults from './query_results';
import Navigation from './navigation';
import Home from './home';
import UserLogin from './user_login'


function App() {

  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query-openings" element={<QueryOpenings />} />
        <Route path="/query-results" element={<QueryResults />} />
          {/*<Route path="/user-login" element={<UserLogin />} >*/}
      </Routes>

      
    </div>

  );
}

export default App