import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get('/patients');
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      <Link to="/patients/create">Create New Patient</Link>
      <ul>
        {patients.map((patient: any) => (
          <li key={patient.patient_id}>
            {patient.name} - <Link to={`/patients/${patient.patient_id}`}>View</Link> - <Link to={`/patients/${patient.patient_id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
