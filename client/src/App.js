import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Importamos nuestros componentes desde componentes
import { About, Detail, Form, Home, Landing, Nav, Footer } from './components'

import axios from 'axios';

axios.defaults.baseURL = 'https://deploy-production-83bb.up.railway.app/';

function App() {

  const location = useLocation();

  return (
    <div className="App">

      {
        location.pathname === '/' ? <Landing /> : <Nav />
      }

      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
