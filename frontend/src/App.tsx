// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap';
import PatientForm from './components/OtherForms';
import NewPatientForm from './components/forms/NewPatientForm';

const App = () => {
  return (
    <>
      <NewPatientForm></NewPatientForm>
    </>
  );
};

export default App;
