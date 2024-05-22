import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import AdmissionForm from './components/forms/AdmissionForm';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.js";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Container fluid>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
        </Routes>
      </BrowserRouter>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
