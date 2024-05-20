$(document).ready(function() {
    // Function to fetch and display all patients
    function fetchPatients() {
        $.ajax({
            url: '/patients', // Endpoint to fetch all patients
            type: 'GET',
            success: function(data) {
                // Display patients in the 'patients' div
                let patientsHtml = '<ul>';
                data.patients.forEach(function(patient) {
                    patientsHtml += `<li>${patient.Name} - Age: ${patient.Age} - Address: ${patient.Address}</li>`;
                });
                patientsHtml += '</ul>';
                $('#patients').html(patientsHtml);
            },
            error: function(error) {
                console.error('Error fetching patients:', error);
            }
        });
    }

    // Fetch and display patients when the page loads
    fetchPatients();

    // Function to handle form submission for adding a new patient
    $('#addPatientForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = $('#name').val();
        const age = $('#age').val();
        const address = $('#address').val();

        // Create data object for the POST request
        const data = {
            name: name,
            age: age,
            address: address
        };

        // AJAX request to add a new patient
        $.ajax({
            url: '/patients',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                // On success, fetch and display updated patients
                fetchPatients();
                // Clear form fields after successful submission
                $('#name').val('');
                $('#age').val('');
                $('#address').val('');
            },
            error: function(error) {
                console.error('Error adding patient:', error);
            }
        });
    });

    // Similar functions can be created for other endpoints (GET, POST, PUT, DELETE) following a similar structure
});

//1-Similar routes for other tables... (Add routes for Appointment, Billing, Insurance_Details, Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)

// Function to fetch and display all appointments
function fetchAppointments() {
    $.ajax({
        url: '/appointments', // Endpoint to fetch all appointments
        type: 'GET',
        success: function(data) {
            // Display appointments in the 'appointments' div
            let appointmentsHtml = '<ul>';
            data.appointments.forEach(function(appointment) {
                appointmentsHtml += `<li>Date: ${appointment.Appointment_DateTime} - Patient ID: ${appointment.Patient_ID} - Clinician ID: ${appointment.Clinician_ID}</li>`;
            });
            appointmentsHtml += '</ul>';
            $('#appointments').html(appointmentsHtml);
        },
        error: function(error) {
            console.error('Error fetching appointments:', error);
        }
    });
}

// Fetch and display appointments when the page loads
fetchAppointments();

// Function to handle form submission for adding a new appointment
$('#addAppointmentForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const appointment_date_time = $('#appointment_date_time').val();
    const patient_id = $('#patient_id').val();
    const clinician_id = $('#clinician_id').val();
    const appointment_status = $('#appointment_status').val();

    // Create data object for the POST request
    const data = {
        appointment_date_time: appointment_date_time,
        patient_id: patient_id,
        clinician_id: clinician_id,
        appointment_status: appointment_status
    };

    // AJAX request to add a new appointment
    $.ajax({
        url: '/appointments',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated appointments
            fetchAppointments();
            // Clear form fields after successful submission
            $('#appointment_date_time').val('');
            $('#patient_id').val('');
            $('#clinician_id').val('');
            $('#appointment_status').val('');
        },
        error: function(error) {
            console.error('Error adding appointment:', error);
        }
    });
});

//2-Similar routes for other tables... (Billing, Insurance_Details, Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)
// Function to fetch and display all billings
function fetchBillings() {
    $.ajax({
        url: '/billings', // Endpoint to fetch all billings
        type: 'GET',
        success: function(data) {
            // Display billings in the 'billings' div
            let billingsHtml = '<ul>';
            data.billings.forEach(function(billing) {
                billingsHtml += `<li>ID: ${billing.Invoice_ID} - Service Charges: ${billing.Service_Charges} - Payment Records: ${billing.Payment_Records} - Outstanding Balances: ${billing.Outstanding_Balances} - Patient ID: ${billing.Patient_ID}</li>`;
            });
            billingsHtml += '</ul>';
            $('#billings').html(billingsHtml);
        },
        error: function(error) {
            console.error('Error fetching billings:', error);
        }
    });
}

// Fetch and display billings when the page loads
fetchBillings();

// Function to handle form submission for adding a new billing
$('#addBillingForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const service_charges = $('#service_charges').val();
    const payment_records = $('#payment_records').val();
    const outstanding_balances = $('#outstanding_balances').val();
    const patient_id = $('#billing_patient_id').val();

    // Create data object for the POST request
    const data = {
        service_charges: service_charges,
        payment_records: payment_records,
        outstanding_balances: outstanding_balances,
        patient_id: patient_id
    };

    // AJAX request to add a new billing
    $.ajax({
        url: '/billings',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated billings
            fetchBillings();
            // Clear form fields after successful submission
            $('#service_charges').val('');
            $('#payment_records').val('');
            $('#outstanding_balances').val('');
            $('#billing_patient_id').val('');
        },
        error: function(error) {
            console.error('Error adding billing:', error);
        }
    });
});

//3-Similar routes for other tables... (Insurance_Details, Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)
// Function to fetch and display all insurance details
function fetchInsuranceDetails() {
    $.ajax({
        url: '/insurance-details', // Endpoint to fetch all insurance details
        type: 'GET',
        success: function(data) {
            // Display insurance details in the 'insuranceDetails' div
            let insuranceDetailsHtml = '<ul>';
            data.insurance_details.forEach(function(insuranceDetail) {
                insuranceDetailsHtml += `<li>ID: ${insuranceDetail.Insurance_ID} - Information: ${insuranceDetail.Insurance_Information} - Patient ID: ${insuranceDetail.Patient_ID}</li>`;
            });
            insuranceDetailsHtml += '</ul>';
            $('#insuranceDetails').html(insuranceDetailsHtml);
        },
        error: function(error) {
            console.error('Error fetching insurance details:', error);
        }
    });
}

// Fetch and display insurance details when the page loads
fetchInsuranceDetails();

// Function to handle form submission for adding a new insurance detail
$('#addInsuranceForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const insurance_information = $('#insurance_information').val();
    const patient_id = $('#patient_id').val();

    // Create data object for the POST request
    const data = {
        insurance_information: insurance_information,
        patient_id: patient_id
    };

    // AJAX request to add a new insurance detail
    $.ajax({
        url: '/insurance-details',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated insurance details
            fetchInsuranceDetails();
            // Clear form fields after successful submission
            $('#insurance_information').val('');
            $('#patient_id').val('');
        },
        error: function(error) {
            console.error('Error adding insurance detail:', error);
        }
    });
});
// Function to handle form submission for updating an insurance detail
$('#updateInsuranceForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const insurance_id = $('#update_insurance_id').val();
    const new_insurance_information = $('#update_insurance_information').val();
    const new_patient_id = $('#update_patient_id').val();

    // Create data object for the PUT request
    const data = {
        new_insurance_information: new_insurance_information,
        new_patient_id: new_patient_id
    };

    // AJAX request to update the insurance detail
    $.ajax({
        url: `/insurance-details/${insurance_id}`, // Endpoint for updating a specific insurance detail by ID
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated insurance details
            fetchInsuranceDetails();
            // Clear form fields after successful submission
            $('#update_insurance_id').val('');
            $('#update_insurance_information').val('');
            $('#update_patient_id').val('');
        },
        error: function(error) {
            console.error('Error updating insurance detail:', error);
        }
    });
});

// Function to delete an insurance detail
function deleteInsuranceDetail(insuranceId) {
    // AJAX request to delete the insurance detail
    $.ajax({
        url: `/insurance-details/${insuranceId}`, // Endpoint for deleting a specific insurance detail by ID
        type: 'DELETE',
        success: function(response) {
            // On success, fetch and display updated insurance details
            fetchInsuranceDetails();
        },
        error: function(error) {
            console.error('Error deleting insurance detail:', error);
        }
    });
}


//4-Similar routes for other tables... (Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)
$(document).ready(function() {
    // Function to fetch and display all staff members
    function fetchStaff() {
        $.ajax({
            url: '/staff', // Endpoint to fetch all staff members
            type: 'GET',
            success: function(data) {
                // Display staff members in the 'staffList' div
                let staffHtml = '<ul>';
                data.staff.forEach(function(staff) {
                    staffHtml += `<li>Name: ${staff.Name} - Contact Information: ${staff.Contact_Information} - Role: ${staff.Role}</li>`;
                });
                staffHtml += '</ul>';
                $('#staffList').html(staffHtml);
            },
            error: function(error) {
                console.error('Error fetching staff members:', error);
            }
        });
    }

    // Fetch and display staff members when the page loads
    fetchStaff();

    // Function to handle form submission for adding a new staff member
    $('#addStaffForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = $('#staffName').val();
        const contactInfo = $('#staffContactInfo').val();
        const role = $('#staffRole').val();

        // Create data object for the POST request
        const data = {
            name: name,
            contact_information: contactInfo,
            role: role
        };

        // AJAX request to add a new staff member
        $.ajax({
            url: '/staff',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                // On success, fetch and display updated staff list
                fetchStaff();
                // Clear form fields after successful submission
                $('#staffName').val('');
                $('#staffContactInfo').val('');
                $('#staffRole').val('');
            },
            error: function(error) {
                console.error('Error adding staff member:', error);
            }
        });
    });
        
        
   
});
// Function to handle form submission for updating a staff member
function updateStaff(staffId, newName, newContactInfo, newRole) {
    // Create data object for the PUT request
    const data = {
        new_name: newName,
        new_contact_information: newContactInfo,
        new_role: newRole
    };

    // AJAX request to update a staff member
    $.ajax({
        url: `/staff/${staffId}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated staff list
            fetchStaff();
        },
        error: function(error) {
            console.error('Error updating staff member:', error);
        }
    });
}

// Function to delete a staff member
function deleteStaff(staffId) {
    // AJAX request to delete a staff member
    $.ajax({
        url: `/staff/${staffId}`,
        type: 'DELETE',
        success: function(response) {
            // On success, fetch and display updated staff list
            fetchStaff();
        },
        error: function(error) {
            console.error('Error deleting staff member:', error);
        }
    });
}

//5-Similar routes for other tables... (Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)

// Function to fetch and display all treatment plans
function fetchTreatmentPlans() {
    $.ajax({
        url: '/treatment-plans', // Endpoint to fetch all treatment plans
        type: 'GET',
        success: function(data) {
            // Display treatment plans in the 'treatmentPlans' div
            let treatmentPlansHtml = '<ul>';
            data.treatment_plans.forEach(function(plan) {
                treatmentPlansHtml += `<li>Plan ID: ${plan.Plan_ID} - Patient ID: ${plan.Patient_ID} - Clinician ID: ${plan.Clinician_ID}</li>`;
            });
            treatmentPlansHtml += '</ul>';
            $('#treatmentPlans').html(treatmentPlansHtml);
        },
        error: function(error) {
            console.error('Error fetching treatment plans:', error);
        }
    });
}

// Fetch and display treatment plans when the page loads
fetchTreatmentPlans();

// Function to handle form submission for adding a new treatment plan
$('#addTreatmentPlanForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const patient_id = $('#patient_id').val();
    const clinician_id = $('#clinician_id').val();

    // Create data object for the POST request
    const data = {
        patient_id: patient_id,
        clinician_id: clinician_id
    };

    // AJAX request to add a new treatment plan
    $.ajax({
        url: '/treatment-plans',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated treatment plans
            fetchTreatmentPlans();
            // Clear form fields after successful submission
            $('#patient_id').val('');
            $('#clinician_id').val('');
        },
        error: function(error) {
            console.error('Error adding treatment plan:', error);
        }
    });
});
// Function to update a treatment plan by ID
function updateTreatmentPlanById(planId) {
    // Get new values for update
    const newPatientId = $('#new_patient_id').val();
    const newClinicianId = $('#new_clinician_id').val();

    // Create data object for the PUT request
    const data = {
        new_patient_id: newPatientId,
        new_clinician_id: newClinicianId
    };

    // AJAX request to update the treatment plan
    $.ajax({
        url: `/treatment-plans/${planId}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated treatment plans
            fetchTreatmentPlans();
            // Clear form fields after successful submission
            $('#new_patient_id').val('');
            $('#new_clinician_id').val('');
        },
        error: function(error) {
            console.error('Error updating treatment plan:', error);
        }
    });
}
// Function to delete a treatment plan by ID
function deleteTreatmentPlanById(planId) {
    // AJAX request to delete the treatment plan
    $.ajax({
        url: `/treatment-plans/${planId}`,
        type: 'DELETE',
        success: function(response) {
            // On success, fetch and display updated treatment plans
            fetchTreatmentPlans();
        },
        error: function(error) {
            console.error('Error deleting treatment plan:', error);
        }
    });
}



//6-Similar routes for other tables... (Assessment_Details, Progress_Details, Reporting, External Data tables)
// Function to fetch and display all assessments
function fetchAssessments() {
    $.ajax({
        url: '/assessments', // Endpoint to fetch all assessments
        type: 'GET',
        success: function(data) {
            // Display assessments in the 'assessments' div
            let assessmentsHtml = '<ul>';
            data.assessments.forEach(function(assessment) {
                assessmentsHtml += `<li>Assessments: ${assessment.Assessments} - Patient ID: ${assessment.Patient_ID} - Clinician ID: ${assessment.Clinician_ID}</li>`;
            });
            assessmentsHtml += '</ul>';
            $('#assessments').html(assessmentsHtml);
        },
        error: function(error) {
            console.error('Error fetching assessments:', error);
        }
    });
}

// Fetch and display assessments when the page loads
fetchAssessments();

// Function to handle form submission for adding a new assessment
$('#addAssessmentForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const assessments = $('#assessmentsInput').val();
    const patient_id = $('#patientIdInput').val();
    const clinician_id = $('#clinicianIdInput').val();

    // Create data object for the POST request
    const data = {
        assessments: assessments,
        patient_id: patient_id,
        clinician_id: clinician_id
    };

    // AJAX request to add a new assessment
    $.ajax({
        url: '/assessments',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated assessments
            fetchAssessments();
            // Clear form fields after successful submission
            $('#assessmentsInput').val('');
            $('#patientIdInput').val('');
            $('#clinicianIdInput').val('');
        },
        error: function(error) {
            console.error('Error adding assessment:', error);
        }
    });
});
// Function to update a specific assessment by ID
function updateAssessment(assessmentId, newData) {
    $.ajax({
        url: `/assessments/${assessmentId}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(newData),
        success: function(response) {
            // Handle success, maybe fetch and display updated assessment list
            fetchAssessments(); // For example, fetch and display all assessments after update
        },
        error: function(error) {
            console.error('Error updating assessment:', error);
        }
    });
}

// Function to delete a specific assessment by ID
function deleteAssessment(assessmentId) {
    $.ajax({
        url: `/assessments/${assessmentId}`,
        type: 'DELETE',
        success: function(response) {
            // Handle success, maybe fetch and display updated assessment list
            fetchAssessments(); // For example, fetch and display all assessments after deletion
        },
        error: function(error) {
            console.error('Error deleting assessment:', error);
        }
    });
}

// Function to fetch a specific assessment by ID
function fetchAssessmentById(assessmentId) {
    $.ajax({
        url: `/assessments/${assessmentId}`,
        type: 'GET',
        success: function(data) {
            // Handle the retrieved assessment data
            console.log('Retrieved assessment:', data);
        },
        error: function(error) {
            console.error('Error fetching assessment:', error);
        }
    });
}


//7-Similar routes for other tables... (Progress_Details, Reporting, External Data tables)
// Function to fetch and display all progress details
function fetchProgressDetails() {
    $.ajax({
        url: '/progress-details', // Endpoint to fetch all progress details
        type: 'GET',
        success: function(data) {
            // Display progress details in the 'progress-details' div
            let progressHtml = '<ul>';
            data.progress_details.forEach(function(progress) {
                progressHtml += `<li>ID: ${progress.Progress_ID} - Progress Reports: ${progress.Progress_Reports} - Goals/Outcomes: ${progress.Goals_Outcomes}</li>`;
            });
            progressHtml += '</ul>';
            $('#progress-details').html(progressHtml);
        },
        error: function(error) {
            console.error('Error fetching progress details:', error);
        }
    });
}

// Fetch and display progress details when the page loads
fetchProgressDetails();

// Function to handle form submission for adding a new progress detail
$('#addProgressDetailForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const progress_reports = $('#progress_reports').val();
    const goals_outcomes = $('#goals_outcomes').val();
    // Additional form values related to progress details

    // Create data object for the POST request
    const data = {
        progress_reports: progress_reports,
        goals_outcomes: goals_outcomes,
        // Additional properties related to progress details
    };

    // AJAX request to add a new progress detail
    $.ajax({
        url: '/progress-details',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated progress details
            fetchProgressDetails();
            // Clear form fields after successful submission
            $('#progress_reports').val('');
            $('#goals_outcomes').val('');
            // Clear additional form fields related to progress details
        },
        error: function(error) {
            console.error('Error adding progress detail:', error);
        }
    });
});
// Function to update a progress detail
function updateProgressDetail(progressId, newData) {
    $.ajax({
        url: `/progress-details/${progressId}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(newData),
        success: function(response) {
            // On success, fetch and display updated progress details
            fetchProgressDetails();
        },
        error: function(error) {
            console.error('Error updating progress detail:', error);
        }
    });
}

// Function to delete a progress detail
function deleteProgressDetail(progressId) {
    $.ajax({
        url: `/progress-details/${progressId}`,
        type: 'DELETE',
        success: function(response) {
            // On success, fetch and display updated progress details
            fetchProgressDetails();
        },
        error: function(error) {
            console.error('Error deleting progress detail:', error);
        }
    });
}

//To utilize these functions, you'll need to trigger them based on user actions,
// like button clicks or form submissions, passing the required parameters such as 
//the progress_id and new data for updating.
//For example, a button click to delete a specific progress detail might look like this:
//javascript
//// Example of using the deleteProgressDetail function on button click
// $('#deleteProgressButton').click(function() {
//     const progressIdToDelete = 123; // Replace with the actual progress ID to be deleted
//     deleteProgressDetail(progressIdToDelete);
// });
// You'll need to integrate these functions into your HTML/JavaScript code 
// and ensure that they are triggered appropriately based on user interactions 
// or events in your application. Adjust the IDs, event triggers, and parameters 
// according to your application's specific requirements and structure.


//8-Similar routes for other tables... (Reporting, External Data tables)
// Function to fetch and display all reports
function fetchReports() {
    $.ajax({
        url: '/reports', // Endpoint to fetch all reports
        type: 'GET',
        success: function(data) {
            // Display reports in the 'reports' div
            let reportsHtml = '<ul>';
            data.reports.forEach(function(report) {
                reportsHtml += `<li>Clinic Performance Metrics: ${report.Clinic_Performance_Metrics} - Patient Outcomes: ${report.Patient_Outcomes} - Financial Statistics: ${report.Financial_Statistics} - Data Trends: ${report.Data_Trends} - Patient ID: ${report.Patient_ID}</li>`;
            });
            reportsHtml += '</ul>';
            $('#reports').html(reportsHtml);
        },
        error: function(error) {
            console.error('Error fetching reports:', error);
        }
    });
}

// Fetch and display reports when the page loads
fetchReports();

// Function to handle form submission for adding a new report
$('#addReportForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const clinic_performance_metrics = $('#clinic_performance_metrics').val();
    const patient_outcomes = $('#patient_outcomes').val();
    const financial_statistics = $('#financial_statistics').val();
    const data_trends = $('#data_trends').val();
    const patient_id = $('#report_patient_id').val();

    // Create data object for the POST request
    const data = {
        clinic_performance_metrics: clinic_performance_metrics,
        patient_outcomes: patient_outcomes,
        financial_statistics: financial_statistics,
        data_trends: data_trends,
        patient_id: patient_id
    };

    // AJAX request to add a new report
    $.ajax({
        url: '/reports',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated reports
            fetchReports();
            // Clear form fields after successful submission
            $('#clinic_performance_metrics').val('');
            $('#patient_outcomes').val('');
            $('#financial_statistics').val('');
            $('#data_trends').val('');
            $('#report_patient_id').val('');
        },
        error: function(error) {
            console.error('Error adding report:', error);
        }
    });
});


//9-Similar routes for other tables... (External Data tables)
// Function to fetch and display all external data
function fetchExternalData() {
    $.ajax({
        url: '/external_data', // Endpoint to fetch all external data
        type: 'GET',
        success: function(data) {
            // Display external data in the 'externalData' div
            let externalDataHtml = '<ul>';
            data.external_data.forEach(function(externalDatum) {
                externalDataHtml += `<li>Patient History: ${externalDatum.Patient_History} - Insurance Coverage Details: ${externalDatum.Insurance_Coverage_Details} - Referral Information: ${externalDatum.Referral_Information}</li>`;
            });
            externalDataHtml += '</ul>';
            $('#externalData').html(externalDataHtml);
        },
        error: function(error) {
            console.error('Error fetching external data:', error);
        }
    });
}

// Fetch and display external data when the page loads
fetchExternalData();

// Function to handle form submission for adding new external data
$('#addExternalDataForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const patient_history = $('#patient_history').val();
    const insurance_coverage_details = $('#insurance_coverage_details').val();
    const referral_information = $('#referral_information').val();
    const patient_id = $('#patient_id').val();

    // Create data object for the POST request
    const data = {
        patient_history: patient_history,
        insurance_coverage_details: insurance_coverage_details,
        referral_information: referral_information,
        patient_id: patient_id
    };

    // AJAX request to add new external data
    $.ajax({
        url: '/external_data',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // On success, fetch and display updated external data
            fetchExternalData();
            // Clear form fields after successful submission
            $('#patient_history').val('');
            $('#insurance_coverage_details').val('');
            $('#referral_information').val('');
            $('#patient_id').val('');
        },
        error: function(error) {
            console.error('Error adding external data:', error);
        }
    });
});
