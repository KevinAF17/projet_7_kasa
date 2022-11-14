import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Composants/header';
import Banner from './Composants/banner';
import Footer from './Composants/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <App />
    <Footer />
  </React.StrictMode>
);
