from flask import Flask, jsonify, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Wilcome88111710348'
app.config['MYSQL_DB'] = 'clinic_database'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'  # This ensures results are returned as dictionaries

mysql = MySQL(app)

@app.route('/', methods=['GET'])
def index():
    #return jsonify({'message': 'Welcome to the Clinic Database API'})
    return render_template('Index.html')
    

# Fetch all patients
@app.route('/patients', methods=['GET'])
def get_patients():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Patient")
    patients = cur.fetchall()
    cur.close()
    return jsonify({'patients': patients})

# Fetch specific patient by ID
@app.route('/patients/<int:patient_id>', methods=['GET'])
def get_patient(patient_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Patient WHERE Patient_ID = %s", (patient_id,))
    patient = cur.fetchone()
    cur.close()
    return jsonify({'patient': patient})

# Add a new patient
@app.route('/patients', methods=['POST'])
def add_patient():
    data = request.get_json()
    name = data['name']
    age = data['age']
    address = data['address']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Patient (Name, Age, Address) VALUES (%s, %s, %s)" % (name, age, address,))
    mysql.connection.commit()
    cur.close()
    
    return jsonify({'message': 'New patient added successfully'})

# Update specific patient by ID

@app.route('/patients/<int:patient_id>', methods=['PUT'])
def update_patient(patient_id):
    data = request.get_json()
    name = data['name']
    age = data['age']
    address = data['address']

    cur = mysql.connection.cursor()
    cur.execute("UPDATE Patient SET Name = %s, Age = %s, Address = %s WHERE Patient_ID = %s", (name, age, address, patient_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Patient updated successfully'})

# Delete specific patient by ID
@app.route('/patients/<int:patient_id>', methods=['DELETE'])
def delete_patient(patient_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Patient WHERE Patient_ID = %s", (patient_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Patient deleted successfully'})


# 1-Similar routes for other tables... (Add routes for Appointment, Billing, Insurance_Details, Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)
# Fetch all appointments
@app.route('/appointments', methods=['GET'])
def get_appointments():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Appointment")
    appointments = cur.fetchall()
    cur.close()
    return jsonify({'appointments': appointments})

# Fetch specific appointment by ID
@app.route('/appointments/<int:appointment_id>', methods=['GET'])
def get_appointment(appointment_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Appointment WHERE Appointment_ID = %s", (appointment_id,))
    appointment = cur.fetchone()
    cur.close()
    return jsonify({'appointment': appointment})

# Add a new appointment
@app.route('/appointments', methods=['POST'])
def add_appointment():
    data = request.get_json()

    # Extract data from JSON
    appointment_date_time = data['appointment_date_time']
    patient_id = data['patient_id']
    clinician_id = data['clinician_id']
    appointment_status = data['appointment_status']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Appointment (Appointment_DateTime, Patient_ID, Clinician_ID, Appointment_Status) VALUES (%s, %s, %s, %s)",
                (appointment_date_time, patient_id, clinician_id, appointment_status))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New appointment added successfully'})

# Update specific appointment by ID
@app.route('/appointments/<int:appointment_id>', methods=['PUT'])
def update_appointment(appointment_id):
    data = request.get_json()
    new_appointment_date_time = data['new_appointment_date_time']
    new_clinician_id = data['new_clinician_id']
    new_appointment_status = data['new_appointment_status']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Appointment SET Appointment_DateTime = %s, Clinician_ID = %s, Appointment_Status = %s WHERE Appointment_ID = %s",
        (new_appointment_date_time, new_clinician_id, new_appointment_status, appointment_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Appointment updated successfully'})


# Delete specific appointment by ID
@app.route('/appointments/<int:appointment_id>', methods=['DELETE'])
def delete_appointment(appointment_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Appointment WHERE Appointment_ID = %s", (appointment_id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Appointment deleted successfully'})

# 2-Similar CRUD operations for other tables (Billing, Insurance_Details, Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)
@app.route('/billings', methods=['GET'])
def get_billings():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Billing")
    billings = cur.fetchall()
    cur.close()
    return jsonify({'billings': billings})
@app.route('/billings/<int:billing_id>', methods=['GET'])
def get_billing(billing_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Billing WHERE Invoice_ID = %s", (billing_id,))
    billing = cur.fetchone()
    cur.close()
    return jsonify({'billing': billing})

@app.route('/billings', methods=['POST'])
def add_billing():
    data = request.get_json()

    # Extract data from JSON
    service_charges = data['service_charges']
    payment_records = data['payment_records']
    outstanding_balances = data['outstanding_balances']
    patient_id = data['patient_id']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Billing (Service_Charges, Payment_Records, Outstanding_Balances, Patient_ID) VALUES (%s, %s, %s, %s)",
                (service_charges, payment_records, outstanding_balances, patient_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New billing added successfully'})

@app.route('/billings/<int:billing_id>', methods=['PUT'])
def update_billing(billing_id):
    data = request.get_json()
    new_service_charges = data['new_service_charges']
    new_payment_records = data['new_payment_records']
    new_outstanding_balances = data['new_outstanding_balances']
    new_patient_id = data['new_patient_id']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Billing SET Service_Charges = %s, Payment_Records = %s, Outstanding_Balances = %s, Patient_ID = %s WHERE Invoice_ID = %s",
        (new_service_charges, new_payment_records, new_outstanding_balances, new_patient_id, billing_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Billing updated successfully'})

@app.route('/billings/<int:billing_id>', methods=['DELETE'])
def delete_billing(billing_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Billing WHERE Invoice_ID = %s", (billing_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Billing deleted successfully'})


# 3-Similar CRUD operations for other tables (Insurance_Details, Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)
# Fetch all insurance details
@app.route('/insurance-details', methods=['GET'])
def get_insurance_details():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Insurance_Details")
    insurance_details = cur.fetchall()
    cur.close()
    return jsonify({'insurance_details': insurance_details})

# Fetch specific insurance detail by ID
@app.route('/insurance-details/<int:insurance_id>', methods=['GET'])
def get_insurance_detail(insurance_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Insurance_Details WHERE Insurance_ID = %s", (insurance_id,))
    insurance_detail = cur.fetchone()
    cur.close()
    return jsonify({'insurance_detail': insurance_detail})

# Add a new insurance detail
@app.route('/insurance-details', methods=['POST'])
def add_insurance_detail():
    data = request.get_json()

    # Extract data from JSON
    insurance_information = data['insurance_information']
    patient_id = data['patient_id']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Insurance_Details (Insurance_Information, Patient_ID) VALUES (%s, %s)",
                (insurance_information, patient_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New insurance detail added successfully'})

# Update specific insurance detail by ID
@app.route('/insurance-details/<int:insurance_id>', methods=['PUT'])
def update_insurance_detail(insurance_id):
    data = request.get_json()
    new_insurance_information = data['new_insurance_information']
    new_patient_id = data['new_patient_id']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Insurance_Details SET Insurance_Information = %s, Patient_ID = %s WHERE Insurance_ID = %s",
        (new_insurance_information, new_patient_id, insurance_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Insurance detail updated successfully'})

# Delete specific insurance detail by ID
@app.route('/insurance-details/<int:insurance_id>', methods=['DELETE'])
def delete_insurance_detail(insurance_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Insurance_Details WHERE Insurance_ID = %s", (insurance_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Insurance detail deleted successfully'})


# 4-Similar CRUD operations for other tables (Staff, Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)

# Fetch all staff
@app.route('/staff', methods=['GET'])
def get_staff():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Staff")
    staff = cur.fetchall()
    cur.close()
    return jsonify({'staff': staff})

# Fetch specific staff by ID
@app.route('/staff/<int:staff_id>', methods=['GET'])
def get_staff_member(staff_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Staff WHERE Staff_ID = %s", (staff_id,))
    staff_member = cur.fetchone()
    cur.close()
    return jsonify({'staff_member': staff_member})

# Add a new staff member
@app.route('/staff', methods=['POST'])
def add_staff():
    data = request.get_json()

    # Extract data from JSON
    name = data['name']
    contact_information = data['contact_information']
    role = data['role']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Staff (Name, Contact_Information, Role) VALUES (%s, %s, %s)",
                (name, contact_information, role))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New staff member added successfully'})

# Update specific staff member by ID
@app.route('/staff/<int:staff_id>', methods=['PUT'])
def update_staff_member(staff_id):
    data = request.get_json()
    new_name = data['new_name']
    new_contact_information = data['new_contact_information']
    new_role = data['new_role']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Staff SET Name = %s, Contact_Information = %s, Role = %s WHERE Staff_ID = %s",
        (new_name, new_contact_information, new_role, staff_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Staff member updated successfully'})

# Delete specific staff member by ID
@app.route('/staff/<int:staff_id>', methods=['DELETE'])
def delete_staff_member(staff_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Staff WHERE Staff_ID = %s", (staff_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Staff member deleted successfully'})

# 5-Similar CRUD operations for other tables (Treatment Plan, Assessment_Details, Progress_Details, Reporting, External Data tables)

@app.route('/treatment-plans', methods=['GET'])
def get_treatment_plans():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM `Treatment Plan`")
    treatment_plans = cur.fetchall()
    cur.close()
    return jsonify({'treatment_plans': treatment_plans})

@app.route('/treatment-plans/<int:plan_id>', methods=['GET'])
def get_treatment_plan(plan_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM `Treatment Plan` WHERE Plan_ID = %s", (plan_id,))
    treatment_plan = cur.fetchone()
    cur.close()
    return jsonify({'treatment_plan': treatment_plan})

@app.route('/treatment-plans', methods=['POST'])
def add_treatment_plan():
    data = request.get_json()
    patient_id = data['patient_id']
    clinician_id = data['clinician_id']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO `Treatment Plan` (Patient_ID, Clinician_ID) VALUES (%s, %s)",
                (patient_id, clinician_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New treatment plan added successfully'})

@app.route('/treatment-plans/<int:plan_id>', methods=['PUT'])
def update_treatment_plan(plan_id):
    data = request.get_json()
    new_patient_id = data['new_patient_id']
    new_clinician_id = data['new_clinician_id']

    cur = mysql.connection.cursor()
    cur.execute("UPDATE `Treatment Plan` SET Patient_ID = %s, Clinician_ID = %s WHERE Plan_ID = %s",
                (new_patient_id, new_clinician_id, plan_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Treatment plan updated successfully'})

@app.route('/treatment-plans/<int:plan_id>', methods=['DELETE'])
def delete_treatment_plan(plan_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM `Treatment Plan` WHERE Plan_ID = %s", (plan_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Treatment plan deleted successfully'})

# 6-Similar CRUD operations for other tables (Assessment_Details, Progress_Details, Reporting, External Data tables)
# Fetch all assessments
@app.route('/assessments', methods=['GET'])
def get_assessments():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Assessment_Details")
    assessments = cur.fetchall()
    cur.close()
    return jsonify({'assessments': assessments})

# Fetch specific assessment by ID
@app.route('/assessments/<int:assessment_id>', methods=['GET'])
def get_assessment(assessment_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Assessment_Details WHERE Assessment_ID = %s", (assessment_id,))
    assessment = cur.fetchone()
    cur.close()
    return jsonify({'assessment': assessment})

# Add a new assessment
@app.route('/assessments', methods=['POST'])
def add_assessment():
    data = request.get_json()

    # Extract data from JSON
    assessments = data['assessments']
    patient_id = data['patient_id']
    clinician_id = data['clinician_id']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Assessment_Details (Assessments, Patient_ID, Clinician_ID) VALUES (%s, %s, %s)",
                (assessments, patient_id, clinician_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New assessment added successfully'})

# Update specific assessment by ID
@app.route('/assessments/<int:assessment_id>', methods=['PUT'])
def update_assessment(assessment_id):
    data = request.get_json()
    new_assessments = data['new_assessments']
    new_clinician_id = data['new_clinician_id']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Assessment_Details SET Assessments = %s, Clinician_ID = %s WHERE Assessment_ID = %s",
        (new_assessments, new_clinician_id, assessment_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Assessment updated successfully'})

# Delete specific assessment by ID
@app.route('/assessments/<int:assessment_id>', methods=['DELETE'])
def delete_assessment(assessment_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Assessment_Details WHERE Assessment_ID = %s", (assessment_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Assessment deleted successfully'})

# 7-Similar CRUD operations for other tables (Progress_Details, Reporting, External Data tables)
# Fetch all progress details
@app.route('/progress-details', methods=['GET'])
def get_progress_details():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Progress_Details")
    progress_details = cur.fetchall()
    cur.close()
    return jsonify({'progress_details': progress_details})

# Fetch specific progress details by ID
@app.route('/progress-details/<int:progress_id>', methods=['GET'])
def get_progress_detail(progress_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Progress_Details WHERE Progress_ID = %s", (progress_id,))
    progress_detail = cur.fetchone()
    cur.close()
    return jsonify({'progress_detail': progress_detail})

# Add new progress details
@app.route('/progress-details', methods=['POST'])
def add_progress_detail():
    data = request.get_json()

    # Extract data from JSON
    progress_reports = data['progress_reports']
    goals_outcomes = data['goals_outcomes']
    patient_id = data['patient_id']
    clinician_id = data['clinician_id']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Progress_Details (Progress_Reports, Goals_Outcomes, Patient_ID, Clinician_ID) VALUES (%s, %s, %s, %s)",
                (progress_reports, goals_outcomes, patient_id, clinician_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New progress details added successfully'})

# Update specific progress details by ID
@app.route('/progress-details/<int:progress_id>', methods=['PUT'])
def update_progress_detail(progress_id):
    data = request.get_json()
    new_progress_reports = data['new_progress_reports']
    new_goals_outcomes = data['new_goals_outcomes']
    new_patient_id = data['new_patient_id']
    new_clinician_id = data['new_clinician_id']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Progress_Details SET Progress_Reports = %s, Goals_Outcomes = %s, Patient_ID = %s, Clinician_ID = %s WHERE Progress_ID = %s",
        (new_progress_reports, new_goals_outcomes, new_patient_id, new_clinician_id, progress_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Progress details updated successfully'})

# Delete specific progress details by ID
@app.route('/progress-details/<int:progress_id>', methods=['DELETE'])
def delete_progress_detail(progress_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Progress_Details WHERE Progress_ID = %s", (progress_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Progress details deleted successfully'})

# 8-Similar CRUD operations for other tables (Reporting, External Data tables)
# Fetch all reports
@app.route('/reports', methods=['GET'])
def get_reports():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Reporting")
    reports = cur.fetchall()
    cur.close()
    return jsonify({'reports': reports})

# Fetch specific report by ID
@app.route('/reports/<int:report_id>', methods=['GET'])
def get_report(report_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Reporting WHERE Report_ID = %s", (report_id,))
    report = cur.fetchone()
    cur.close()
    return jsonify({'report': report})

# Add a new report
@app.route('/reports', methods=['POST'])
def add_report():
    data = request.get_json()

    # Extract data from JSON
    clinic_performance_metrics = data['clinic_performance_metrics']
    patient_outcomes = data['patient_outcomes']
    financial_statistics = data['financial_statistics']
    data_trends = data['data_trends']
    patient_id = data['patient_id']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Reporting (Clinic_Performance_Metrics, Patient_Outcomes, Financial_Statistics, Data_Trends, Patient_ID) VALUES (%s, %s, %s, %s, %s)",
                (clinic_performance_metrics, patient_outcomes, financial_statistics, data_trends, patient_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New report added successfully'})

# Update specific report by ID
@app.route('/reports/<int:report_id>', methods=['PUT'])
def update_report(report_id):
    data = request.get_json()
    new_clinic_performance_metrics = data['new_clinic_performance_metrics']
    new_patient_outcomes = data['new_patient_outcomes']
    new_financial_statistics = data['new_financial_statistics']
    new_data_trends = data['new_data_trends']
    new_patient_id = data['new_patient_id']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE Reporting SET Clinic_Performance_Metrics = %s, Patient_Outcomes = %s, Financial_Statistics = %s, Data_Trends = %s, Patient_ID = %s WHERE Report_ID = %s",
        (new_clinic_performance_metrics, new_patient_outcomes, new_financial_statistics, new_data_trends, new_patient_id, report_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Report updated successfully'})

# Delete specific report by ID
@app.route('/reports/<int:report_id>', methods=['DELETE'])
def delete_report(report_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM Reporting WHERE Report_ID = %s", (report_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Report deleted successfully'})

# 9-Similar CRUD operations for other tables (External Data tables)
# Fetch all external data
@app.route('/external_data', methods=['GET'])
def get_external_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM External_Data")
    external_data = cur.fetchall()
    cur.close()
    return jsonify({'external_data': external_data})

# Fetch specific external data by ID
@app.route('/external_data/<int:external_id>', methods=['GET'])
def get_external_datum(external_id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM External_Data WHERE External_ID = %s", (external_id,))
    external_datum = cur.fetchone()
    cur.close()
    return jsonify({'external_datum': external_datum})

# Add new external data
@app.route('/external_data', methods=['POST'])
def add_external_data():
    data = request.get_json()

    # Extract data from JSON
    patient_history = data['patient_history']
    insurance_coverage_details = data['insurance_coverage_details']
    referral_information = data['referral_information']
    patient_id = data['patient_id']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO External_Data (Patient_History, Insurance_Coverage_Details, Referral_Information, Patient_ID) VALUES (%s, %s, %s, %s)",
                (patient_history, insurance_coverage_details, referral_information, patient_id))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'New external data added successfully'})

# Update specific external data by ID
@app.route('/external_data/<int:external_id>', methods=['PUT'])
def update_external_data(external_id):
    data = request.get_json()
    new_patient_history = data['new_patient_history']
    new_insurance_coverage_details = data['new_insurance_coverage_details']
    new_referral_information = data['new_referral_information']
    new_patient_id = data['new_patient_id']

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE External_Data SET Patient_History = %s, Insurance_Coverage_Details = %s, Referral_Information = %s, Patient_ID = %s WHERE External_ID = %s",
        (new_patient_history, new_insurance_coverage_details, new_referral_information, new_patient_id, external_id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'External data updated successfully'})

# Delete specific external data by ID
@app.route('/external_data/<int:external_id>', methods=['DELETE'])
def delete_external_data(external_id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM External_Data WHERE External_ID = %s", (external_id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'External data deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)

