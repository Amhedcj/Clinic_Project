// src/PatientForm.js
import React, { useState } from 'react';
// import { API } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    name: '',
    age: '',
    allergies: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
    //   await API.post('clinicAPI', '/patients', {
    //     body: formData,
    //   });
      navigate('/');
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Patient Information</h2>
      <input
        type="text"
        name="patient_id"
        value={formData.patient_id}
        onChange={handleChange}
        placeholder="Patient ID"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
        placeholder="Allergies"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;
