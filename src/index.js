import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);