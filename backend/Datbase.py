import boto3

# Initialize a session using Amazon DynamoDB
dynamodb = boto3.resource('dynamodb', region_name='us-west-1')

# Create Patients table
def create_patients_table():
    table = dynamodb.create_table(
        TableName='Patients',
        KeySchema=[
            {
                'AttributeName': 'patient_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'patient_id',
                'AttributeType': 'N'
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create Admissions table
def create_admissions_table():
    table = dynamodb.create_table(
        TableName='Admissions',
        KeySchema=[
            {
                'AttributeName': 'admission_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'admission_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'patient_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'PatientIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'patient_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create Procedures table
def create_procedures_table():
    table = dynamodb.create_table(
        TableName='Procedures',
        KeySchema=[
            {
                'AttributeName': 'procedure_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'procedure_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'admission_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'AdmissionIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'admission_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create Medications table
def create_medications_table():
    table = dynamodb.create_table(
        TableName='Medications',
        KeySchema=[
            {
                'AttributeName': 'medication_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'medication_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'admission_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'AdmissionIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'admission_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create Therapies table
def create_therapies_table():
    table = dynamodb.create_table(
        TableName='Therapies',
        KeySchema=[
            {
                'AttributeName': 'therapy_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'therapy_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'admission_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'AdmissionIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'admission_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create Discharges table
def create_discharges_table():
    table = dynamodb.create_table(
        TableName='Discharges',
        KeySchema=[
            {
                'AttributeName': 'discharge_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'discharge_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'admission_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'AdmissionIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'admission_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create IntakeOutput table
def create_intake_output_table():
    table = dynamodb.create_table(
        TableName='IntakeOutput',
        KeySchema=[
            {
                'AttributeName': 'intake_output_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'intake_output_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'admission_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'AdmissionIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'admission_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create FlowSheet table
def create_flow_sheet_table():
    table = dynamodb.create_table(
        TableName='FlowSheet',
        KeySchema=[
            {
                'AttributeName': 'flow_sheet_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'flow_sheet_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'admission_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'AdmissionIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'admission_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create PatientProgressNotes table
def create_patient_progress_notes_table():
    table = dynamodb.create_table(
        TableName='PatientProgressNotes',
        KeySchema=[
            {
                'AttributeName': 'progress_note_id',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'progress_note_id',
                'AttributeType': 'N'
            },
            {
                'AttributeName': 'patient_id',
                'AttributeType': 'N'
            }
        ],
        GlobalSecondaryIndexes=[
            {
                'IndexName': 'PatientIndex',
                'KeySchema': [
                    {
                        'AttributeName': 'patient_id',
                        'KeyType': 'HASH'
                    }
                ],
                'Projection': {
                    'ProjectionType': 'ALL'
                },
                'ProvisionedThroughput': {
                    'ReadCapacityUnits': 1,
                    'WriteCapacityUnits': 1
                }
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 1,
            'WriteCapacityUnits': 1
        }
    )
    return table

# Create all tables
patients_table = create_patients_table()
admissions_table = create_admissions_table()
procedures_table = create_procedures_table()
medications_table = create_medications_table()
therapies_table = create_therapies_table()
discharges_table = create_discharges_table()
intake_output_table = create_intake_output_table()
flow_sheet_table = create_flow_sheet_table()
patient_progress_notes_table = create_patient_progress_notes_table()

# Wait until the tables exist
patients_table.meta.client.get_waiter('table_exists').wait(TableName='Patients')
admissions_table.meta.client.get_waiter('table_exists').wait(TableName='Admissions')
procedures_table.meta.client.get_waiter('table_exists').wait(TableName='Procedures')
medications_table.meta.client.get_waiter('table_exists').wait(TableName='Medications')
therapies_table.meta.client.get_waiter('table_exists').wait(TableName='Therapies')
discharges_table.meta.client.get_waiter('table_exists').wait(TableName='Discharges')
intake_output_table.meta.client.get_waiter('table_exists').wait(TableName='IntakeOutput')
flow_sheet_table.meta.client.get_waiter('table_exists').wait(TableName='FlowSheet')
patient_progress_notes_table.meta.client.get_waiter('table_exists').wait(TableName='PatientProgressNotes')

print("All tables created successfully!")





### CRUD Operations for Each Table

#Here is the CRUD operations for each table according to the provided schema design.

### Patients Table

#### Create Patient

def create_patient(patient_id, name, age, allergies):
    table = dynamodb.Table('Patients')
    response = table.put_item(
       Item={
            'patient_id': patient_id,
            'name': name,
            'age': age,
            'allergies': allergies
        }
    )
    return response

# CRUD Operations Patients Table
#### Read Patient

def get_patient(patient_id):
    table = dynamodb.Table('Patients')
    response = table.get_item(
        Key={
            'patient_id': patient_id
        }
    )
    return response.get('Item')


#### Update Patient

def update_patient(patient_id, name=None, age=None, allergies=None):
    table = dynamodb.Table('Patients')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if name:
        update_expression += "name = :name, "
        expression_attribute_values[':name'] = name
    if age:
        update_expression += "age = :age, "
        expression_attribute_values[':age'] = age
    if allergies:
        update_expression += "allergies = :allergies, "
        expression_attribute_values[':allergies'] = allergies
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'patient_id': patient_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Patient

def delete_patient(patient_id):
    table = dynamodb.Table('Patients')
    response = table.delete_item(
        Key={
            'patient_id': patient_id
        }
    )
    return response

# CRUD Operations Admissions Table
### Admissions Table

#### Create Admission

def create_admission(admission_id, patient_id, date, arrival_time, mode_of_arrival, safety_measures, stable, g_tube_or_trach, general_assessment, additional_comments, nurse_sign):
    table = dynamodb.Table('Admissions')
    response = table.put_item(
       Item={
            'admission_id': admission_id,
            'patient_id': patient_id,
            'date': date,
            'arrival_time': arrival_time,
            'mode_of_arrival': mode_of_arrival,
            'safety_measures': safety_measures,
            'stable': stable,
            'g_tube_or_trach': g_tube_or_trach,
            'general_assessment': general_assessment,
            'additional_comments': additional_comments,
            'nurse_sign': nurse_sign
        }
    )
    return response


#### Read Admission

def get_admission(admission_id):
    table = dynamodb.Table('Admissions')
    response = table.get_item(
        Key={
            'admission_id': admission_id
        }
    )
    return response.get('Item')


#### Update Admission

def update_admission(admission_id, patient_id=None, date=None, arrival_time=None, mode_of_arrival=None, safety_measures=None, stable=None, g_tube_or_trach=None, general_assessment=None, additional_comments=None, nurse_sign=None):
    table = dynamodb.Table('Admissions')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if patient_id:
        update_expression += "patient_id = :patient_id, "
        expression_attribute_values[':patient_id'] = patient_id
    if date:
        update_expression += "date = :date, "
        expression_attribute_values[':date'] = date
    if arrival_time:
        update_expression += "arrival_time = :arrival_time, "
        expression_attribute_values[':arrival_time'] = arrival_time
    if mode_of_arrival:
        update_expression += "mode_of_arrival = :mode_of_arrival, "
        expression_attribute_values[':mode_of_arrival'] = mode_of_arrival
    if safety_measures:
        update_expression += "safety_measures = :safety_measures, "
        expression_attribute_values[':safety_measures'] = safety_measures
    if stable is not None:
        update_expression += "stable = :stable, "
        expression_attribute_values[':stable'] = stable
    if g_tube_or_trach is not None:
        update_expression += "g_tube_or_trach = :g_tube_or_trach, "
        expression_attribute_values[':g_tube_or_trach'] = g_tube_or_trach
    if general_assessment is not None:
        update_expression += "general_assessment = :general_assessment, "
        expression_attribute_values[':general_assessment'] = general_assessment
    if additional_comments:
        update_expression += "additional_comments = :additional_comments, "
        expression_attribute_values[':additional_comments'] = additional_comments
    if nurse_sign:
        update_expression += "nurse_sign = :nurse_sign, "
        expression_attribute_values[':nurse_sign'] = nurse_sign
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'admission_id': admission_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Admission

def delete_admission(admission_id):
    table = dynamodb.Table('Admissions')
    response = table.delete_item(
        Key={
            'admission_id': admission_id
        }
    )
    return response

# CRUD Operations Procedures Table
### Procedures Table

#### Create Procedure

def create_procedure(procedure_id, admission_id, time, procedure, precautions, comments, signature):
    table = dynamodb.Table('Procedures')
    response = table.put_item(
       Item={
            'procedure_id': procedure_id,
            'admission_id': admission_id,
            'time': time,
            'procedure': procedure,
            'precautions': precautions,
            'comments': comments,
            'signature': signature
        }
    )
    return response


#### Read Procedure

def get_procedure(procedure_id):
    table = dynamodb.Table('Procedures')
    response = table.get_item(
        Key={
            'procedure_id': procedure_id
        }
    )
    return response.get('Item')


#### Update Procedure

def update_procedure(procedure_id, admission_id=None, time=None, procedure=None, precautions=None, comments=None, signature=None):
    table = dynamodb.Table('Procedures')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if admission_id:
        update_expression += "admission_id = :admission_id, "
        expression_attribute_values[':admission_id'] = admission_id
    if time:
        update_expression += "time = :time, "
        expression_attribute_values[':time'] = time
    if procedure:
        update_expression += "procedure = :procedure, "
        expression_attribute_values[':procedure'] = procedure
    if precautions:
        update_expression += "precautions = :precautions, "
        expression_attribute_values[':precautions'] = precautions
    if comments:
        update_expression += "comments = :comments, "
        expression_attribute_values[':comments'] = comments
    if signature:
        update_expression += "signature = :signature, "
        expression_attribute_values[':signature'] = signature
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'procedure_id': procedure_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Procedure

def delete_procedure(procedure_id):
    table = dynamodb.Table('Procedures')
    response = table.delete_item(
        Key={
            'procedure_id': procedure_id
        }
    )
    return response

# CRUD Operations Medications Table
### Medications Table

#### Create Medication

def create_medication(medication_id, admission_id, medication, administered, prn, precautions):
    table = dynamodb.Table('Medications')
    response = table.put_item(
       Item={
            'medication_id': medication_id,
            'admission_id': admission_id,
            'medication': medication,
            'administered': administered,
            'prn': prn,
            'precautions': precautions
        }
    )
    return response


#### Read Medication

def get_medication(medication_id):
    table = dynamodb.Table('Medications')
    response = table.get_item(
        Key={
            'medication_id': medication_id
        }
    )
    return response.get('Item')


#### Update Medication

def update_medication(medication_id, admission_id=None, medication=None, administered=None, prn=None, precautions=None):
    table = dynamodb.Table('Medications')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if admission_id:
        update_expression += "admission_id = :admission_id, "
        expression_attribute_values[':admission_id'] = admission_id
    if medication:
        update_expression += "medication = :medication, "
        expression_attribute_values[':medication'] = medication
    if administered is not None:
        update_expression += "administered = :administered, "
        expression_attribute_values[':administered'] = administered
    if prn is not None:
        update_expression += "prn = :prn, "
        expression_attribute_values[':prn'] = prn
    if precautions:


        update_expression += "precautions = :precautions, "
        expression_attribute_values[':precautions'] = precautions
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'medication_id': medication_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Medication

def delete_medication(medication_id):
    table = dynamodb.Table('Medications')
    response = table.delete_item(
        Key={
            'medication_id': medication_id
        }
    )
    return response

# CRUD Operations Therapies Table
### Therapies Table

#### Create Therapy

def create_therapy(therapy_id, admission_id, pt, ot, st):
    table = dynamodb.Table('Therapies')
    response = table.put_item(
       Item={
            'therapy_id': therapy_id,
            'admission_id': admission_id,
            'pt': pt,
            'ot': ot,
            'st': st
        }
    )
    return response


#### Read Therapy

def get_therapy(therapy_id):
    table = dynamodb.Table('Therapies')
    response = table.get_item(
        Key={
            'therapy_id': therapy_id
        }
    )
    return response.get('Item')


#### Update Therapy

def update_therapy(therapy_id, admission_id=None, pt=None, ot=None, st=None):
    table = dynamodb.Table('Therapies')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if admission_id:
        update_expression += "admission_id = :admission_id, "
        expression_attribute_values[':admission_id'] = admission_id
    if pt is not None:
        update_expression += "pt = :pt, "
        expression_attribute_values[':pt'] = pt
    if ot is not None:
        update_expression += "ot = :ot, "
        expression_attribute_values[':ot'] = ot
    if st is not None:
        update_expression += "st = :st, "
        expression_attribute_values[':st'] = st
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'therapy_id': therapy_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Therapy

def delete_therapy(therapy_id):
    table = dynamodb.Table('Therapies')
    response = table.delete_item(
        Key={
            'therapy_id': therapy_id
        }
    )
    return response

# CRUD Operations Discharges Table
### Discharges Table

#### Create Discharge

def create_discharge(discharge_id, admission_id, discharge_time, mode_of_discharge, safety_measures, stable, g_tube_or_trach, general_assessment, additional_comments, nurse_sign):
    table = dynamodb.Table('Discharges')
    response = table.put_item(
       Item={
            'discharge_id': discharge_id,
            'admission_id': admission_id,
            'discharge_time': discharge_time,
            'mode_of_discharge': mode_of_discharge,
            'safety_measures': safety_measures,
            'stable': stable,
            'g_tube_or_trach': g_tube_or_trach,
            'general_assessment': general_assessment,
            'additional_comments': additional_comments,
            'nurse_sign': nurse_sign
        }
    )
    return response


#### Read Discharge

def get_discharge(discharge_id):
    table = dynamodb.Table('Discharges')
    response = table.get_item(
        Key={
            'discharge_id': discharge_id
        }
    )
    return response.get('Item')


#### Update Discharge

def update_discharge(discharge_id, admission_id=None, discharge_time=None, mode_of_discharge=None, safety_measures=None, stable=None, g_tube_or_trach=None, general_assessment=None, additional_comments=None, nurse_sign=None):
    table = dynamodb.Table('Discharges')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if admission_id:
        update_expression += "admission_id = :admission_id, "
        expression_attribute_values[':admission_id'] = admission_id
    if discharge_time:
        update_expression += "discharge_time = :discharge_time, "
        expression_attribute_values[':discharge_time'] = discharge_time
    if mode_of_discharge:
        update_expression += "mode_of_discharge = :mode_of_discharge, "
        expression_attribute_values[':mode_of_discharge'] = mode_of_discharge
    if safety_measures:
        update_expression += "safety_measures = :safety_measures, "
        expression_attribute_values[':safety_measures'] = safety_measures
    if stable is not None:
        update_expression += "stable = :stable, "
        expression_attribute_values[':stable'] = stable
    if g_tube_or_trach is not None:
        update_expression += "g_tube_or_trach = :g_tube_or_trach, "
        expression_attribute_values[':g_tube_or_trach'] = g_tube_or_trach
    if general_assessment is not None:
        update_expression += "general_assessment = :general_assessment, "
        expression_attribute_values[':general_assessment'] = general_assessment
    if additional_comments:
        update_expression += "additional_comments = :additional_comments, "
        expression_attribute_values[':additional_comments'] = additional_comments
    if nurse_sign:
        update_expression += "nurse_sign = :nurse_sign, "
        expression_attribute_values[':nurse_sign'] = nurse_sign
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'discharge_id': discharge_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Discharge

def delete_discharge(discharge_id):
    table = dynamodb.Table('Discharges')
    response = table.delete_item(
        Key={
            'discharge_id': discharge_id
        }
    )
    return response

# CRUD Operations IntakeOutput Table
### IntakeOutput Table

#### Create Intake/Output

def create_intake_output(intake_output_id, admission_id, time, po, g_tube):
    table = dynamodb.Table('IntakeOutput')
    response = table.put_item(
       Item={
            'intake_output_id': intake_output_id,
            'admission_id': admission_id,
            'time': time,
            'po': po,
            'g_tube': g_tube
        }
    )
    return response


#### Read Intake/Output

def get_intake_output(intake_output_id):
    table = dynamodb.Table('IntakeOutput')
    response = table.get_item(
        Key={
            'intake_output_id': intake_output_id
        }
    )
    return response.get('Item')


#### Update Intake/Output

def update_intake_output(intake_output_id, admission_id=None, time=None, po=None, g_tube=None):
    table = dynamodb.Table('IntakeOutput')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if admission_id:
        update_expression += "admission_id = :admission_id, "
        expression_attribute_values[':admission_id'] = admission_id
    if time:
        update_expression += "time = :time, "
        expression_attribute_values[':time'] = time
    if po is not None:
        update_expression += "po = :po, "
        expression_attribute_values[':po'] = po
    if g_tube is not None:
        update_expression += "g_tube = :g_tube, "
        expression_attribute_values[':g_tube'] = g_tube
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'intake_output_id': intake_output_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Intake/Output

def delete_intake_output(intake_output_id):
    table = dynamodb.Table('IntakeOutput')
    response = table.delete_item(
        Key={
            'intake_output_id': intake_output_id
        }
    )
    return response

# CRUD Operations FlowSheet Table
### FlowSheet Table

#### Create FlowSheet

def create_flow_sheet(flow_sheet_id, admission_id, time, temperature, blood_pressure, heart_rate, respiratory_rate, pain_scale, level_of_consciousness, activity, respiratory_effort, breath_sounds, fio2_lxm, sao2, heart_sounds, rhythm, peripheral_pulse, capillary_refill, color, abdomen, g_tube_j_tube, bowel_sounds, mouth, stools, skin_color, skin_condition, skin_temperature, voiding, catheterization, adls, diapers, emesis, glasses, splints_orthotics, monitors, feeding_pump, portable_suction, hearing_aid, oxygen, wheelchair, nebulizer):
    table = dynamodb.Table('FlowSheet')
    response = table.put_item(
       Item={
            'flow_sheet_id': flow_sheet_id,
            'admission_id': admission_id,
            'time': time,
            'temperature': temperature,
            'blood_pressure': blood_pressure,
            'heart_rate': heart_rate,
            'respiratory_rate': respiratory_rate,
            'pain_scale': pain_scale,
            'level_of_consciousness': level_of_consciousness,
            'activity': activity,
            'respiratory_effort': respiratory_effort,
            'breath_sounds': breath_sounds,
            'fio2_lxm': fio2_lxm,
            'sao2': sao2,
            'heart_sounds': heart_sounds,
            'rhythm': rhythm,
            'peripheral_pulse': peripheral_pulse,
            'capillary_refill': capillary_refill,
            'color': color,
            'abdomen': abdomen,
            'g_tube_j_tube': g_tube_j_tube,
            'bowel_sounds': bowel_sounds,
            'mouth': mouth,
            'stools': stools,
            'skin_color': skin_color,
            'skin_condition': skin_condition,
            'skin_temperature': skin_temperature,
            'voiding': voiding,
            'catheterization': catheterization,
            'adls': adls,
            'diapers': diapers,
            'emesis': emesis,
            'glasses': glasses,
            'splints_orthotics': splints_orthotics,
            'monitors': monitors,
            'feeding_pump': feeding_pump,
            'portable_suction': portable_suction,
            'hearing_aid': hearing_aid,
            'oxygen': oxygen,
            'wheelchair': wheelchair,
            'nebulizer': nebulizer
        }
    )
    return response


#### Read FlowSheet

def get_flow_sheet(flow_sheet_id):
    table = dynamodb.Table('FlowSheet')
    response = table.get_item(
        Key={
            'flow_sheet_id': flow_sheet_id
        }
    )
    return response.get('Item')


#### Update FlowSheet

def update_flow_sheet(flow_sheet_id, admission_id=None, time=None, temperature=None, blood_pressure=None, heart_rate=None, respiratory_rate=None, pain_scale=None, level_of_consciousness=None, activity=None, respiratory_effort=None, breath_sounds=None, fio2_lxm=None, sao2=None, heart_sounds=None, rhythm=None, peripheral_pulse=None, capillary_refill=None, color=None, abdomen=None, g_tube_j_tube=None, bowel_sounds=None, mouth=None, stools=None, skin_color=None, skin_condition=None, skin_temperature=None, voiding=None, catheterization=None, adls=None, diapers=None, emesis=None, glasses=None, splints_orthotics=None, monitors=None, feeding_pump=None, portable_suction=None, hearing_aid=None, oxygen=None, wheelchair=None, nebulizer=None):
    table = dynamodb.Table('FlowSheet')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if admission_id:
        update_expression += "admission_id = :admission_id, "
        expression_attribute_values[':admission_id'] = admission_id
    if time:
        update_expression += "time = :time, "
        expression_attribute_values[':time'] = time
    if temperature:
        update_expression += "temperature = :temperature, "
        expression_attribute_values[':temperature'] = temperature
    if blood_pressure:
        update_expression += "blood_pressure = :blood_pressure, "
        expression_attribute_values[':blood_pressure'] = blood_pressure
    if heart_rate:
        update_expression += "heart_rate = :heart_rate, "
        expression_attribute_values[':heart_rate'] = heart_rate
    if respiratory_rate:
        update_expression += "respiratory_rate = :respiratory_rate, "
        expression_attribute_values[':respiratory_rate'] = respiratory_rate
    if pain_scale is not None:
        update_expression += "pain_scale = :pain_scale, "
        expression_attribute_values[':pain_scale'] = pain_scale
    if level_of_consciousness:
        update_expression += "level_of_consciousness = :level_of_consciousness, "
        expression_attribute_values[':level_of_consciousness'] = level_of_consciousness
    if activity:
        update_expression += "activity = :activity, "
        expression_attribute_values[':activity'] = activity
    if respiratory_effort:
        update_expression += "respiratory_effort = :respiratory_effort, "
        expression_attribute_values[':respiratory_effort'] = respiratory_effort
    if breath_sounds:
        update_expression += "breath_sounds = :breath_sounds, "
        expression_attribute_values[':breath_sounds'] = breath_sounds
    if fio2_lxm is not None:
        update_expression += "fio2_lxm = :fio2_lxm, "
        expression_attribute_values[':fio2_lxm'] = fio2_lxm
    if sao2 is not None:
        update_expression += "sao2 = :sao2, "
        expression_attribute_values[':sao2'] = sao2
    if heart_sounds:
        update_expression += "heart_sounds = :heart_sounds, "
        expression_attribute_values[':heart_sounds'] = heart_sounds
    if rhythm:
        update_expression += "rhythm = :rhythm, "
        expression_attribute_values[':rhythm'] = rhythm
    if peripheral_pulse:
        update_expression += "peripheral_pulse = :peripheral_pulse, "
        expression_attribute_values[':peripheral_pulse'] = peripheral_pulse
    if capillary_refill:
        update_expression += "capillary_refill = :capillary_refill, "
        expression_attribute_values[':capillary_refill'] = capillary_refill
    if color:
        update_expression += "color = :color, "
        expression_attribute_values[':color'] = color
    if abdomen:
        update_expression += "abdomen = :abdomen, "
        expression_attribute_values[':abdomen'] = abdomen
    if g_tube_j_tube:
        update_expression += "g_tube_j_tube = :g_tube_j_tube, "
        expression_attribute_values[':g_tube_j_tube'] = g_tube_j_tube
    if bowel_sounds:
        update_expression += "bowel_sounds = :bowel_sounds, "
        expression_attribute_values[':bowel_sounds'] = bowel_sounds
    if mouth:
        update_expression += "mouth = :mouth, "
        expression_attribute_values[':mouth'] = mouth
    if stools:
        update_expression += "stools = :stools, "
        expression_attribute_values[':stools'] = stools
    if skin_color:
        update_expression += "skin_color = :skin_color, "
        expression_attribute_values[':skin_color'] = skin_color
    if skin_condition:
        update_expression += "skin_condition = :skin_condition, "
        expression_attribute_values[':skin_condition'] = skin_condition
    if skin_temperature:
        update_expression += "skin_temperature = :skin_temperature, "
        expression_attribute_values[':skin_temperature'] = skin_temperature
    if voiding:
        update_expression += "voiding = :voiding, "
        expression_attribute_values[':voiding'] = voiding
    if catheterization is not None:
        update_expression += "catheterization = :catheterization, "
        expression_attribute_values[':catheterization'] = catheterization
    if adls:
        update_expression += "adls = :adls, "
        expression_attribute_values[':adls'] = adls
    if diapers is not None:
        update_expression += "diapers = :diapers, "
        expression_attribute_values[':diapers'] = diapers
    if emesis is not None:
        update_expression += "emesis = :emesis, "
        expression_attribute_values[':emesis'] = emesis
    if glasses is not None:
        update_expression += "glasses = :glasses, "
        expression_attribute_values[':glasses'] = glasses
    if splints_orthotics is not None:
        update_expression += "splints_orthotics = :splints_orthotics, "
        expression_attribute_values[':splints_orthotics'] = splints_orthotics
    if monitors is not None:
        update_expression += "monitors = :monitors, "
        expression_attribute_values[':monitors'] = monitors
    if feeding_pump is not None:
        update_expression += "feeding_pump = :feeding_pump, "
        expression_attribute_values[':feeding_pump'] = feeding_pump
    if portable_suction is not None:
        update_expression += "portable_suction = :portable_suction, "
        expression_attribute_values[':portable_suction'] = portable_suction
    if hearing_aid is not None:
        update_expression += "hearing_aid = :hearing_aid, "
        expression_attribute_values[':hearing_aid'] = hearing_aid
    if oxygen is not None:
        update_expression += "oxygen = :oxygen, "
        expression_attribute_values[':oxygen'] = oxygen
    if wheelchair is not None:
        update_expression += "wheelchair = :wheelchair, "
        expression_attribute_values[':wheelchair'] = wheelchair
    if nebulizer is not None:
        update_expression += "nebulizer = :nebulizer, "
        expression_attribute_values[':nebulizer'] = nebulizer
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'flow_sheet_id': flow_sheet_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete FlowSheet



def delete_flow_sheet(flow_sheet_id):
    table = dynamodb.Table('FlowSheet')
    response = table.delete_item(
        Key={
            'flow_sheet_id': flow_sheet_id
        }
    )
    return response

# CRUD Operations PatientProgressNotes Table
### PatientProgressNotes Table

#### Create Patient Progress Note

def create_patient_progress_note(progress_note_id, patient_id, date, time, notes, nurse_signature):
    table = dynamodb.Table('PatientProgressNotes')
    response = table.put_item(
       Item={
            'progress_note_id': progress_note_id,
            'patient_id': patient_id,
            'date': date,
            'time': time,
            'notes': notes,
            'nurse_signature': nurse_signature
        }
    )
    return response


#### Read Patient Progress Note

def get_patient_progress_note(progress_note_id):
    table = dynamodb.Table('PatientProgressNotes')
    response = table.get_item(
        Key={
            'progress_note_id': progress_note_id
        }
    )
    return response.get('Item')


#### Update Patient Progress Note

def update_patient_progress_note(progress_note_id, patient_id=None, date=None, time=None, notes=None, nurse_signature=None):
    table = dynamodb.Table('PatientProgressNotes')
    update_expression = "SET "
    expression_attribute_values = {}
    
    if patient_id:
        update_expression += "patient_id = :patient_id, "
        expression_attribute_values[':patient_id'] = patient_id
    if date:
        update_expression += "date = :date, "
        expression_attribute_values[':date'] = date
    if time:
        update_expression += "time = :time, "
        expression_attribute_values[':time'] = time
    if notes:
        update_expression += "notes = :notes, "
        expression_attribute_values[':notes'] = notes
    if nurse_signature:
        update_expression += "nurse_signature = :nurse_signature, "
        expression_attribute_values[':nurse_signature'] = nurse_signature
    
    update_expression = update_expression.rstrip(', ')
    
    response = table.update_item(
        Key={'progress_note_id': progress_note_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return response


#### Delete Patient Progress Note

def delete_patient_progress_note(progress_note_id):
    table = dynamodb.Table('PatientProgressNotes')
    response = table.delete_item(
        Key={
            'progress_note_id': progress_note_id
        }
    )
    return response


#Flask application with endpoints for each CRUD operationto create a simple web server that will handle HTTP requests and interact with the DynamoDB tables

#pip install Flask boto3
from flask import Flask, request, jsonify
import boto3

app = Flask(__name__)

# Initialize a session using Amazon DynamoDB
dynamodb = boto3.resource('dynamodb', region_name='us-west-1')

# Helper function to get table
def get_table(table_name):
    return dynamodb.Table(table_name)

# Patients CRUD endpoints

@app.route('/patients', methods=['POST'])
def create_patient():
    data = request.json
    table = get_table('Patients')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/patients/<int:patient_id>', methods=['GET'])
def get_patient(patient_id):
    table = get_table('Patients')
    response = table.get_item(Key={'patient_id': patient_id})
    return jsonify(response.get('Item')), 200

@app.route('/patients/<int:patient_id>', methods=['PUT'])
def update_patient(patient_id):
    data = request.json
    table = get_table('Patients')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'patient_id': patient_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/patients/<int:patient_id>', methods=['DELETE'])
def delete_patient(patient_id):
    table = get_table('Patients')
    response = table.delete_item(Key={'patient_id': patient_id})
    return jsonify(response), 204

# Admissions CRUD endpoints

@app.route('/admissions', methods=['POST'])
def create_admission():
    data = request.json
    table = get_table('Admissions')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/admissions/<int:admission_id>', methods=['GET'])
def get_admission(admission_id):
    table = get_table('Admissions')
    response = table.get_item(Key={'admission_id': admission_id})
    return jsonify(response.get('Item')), 200

@app.route('/admissions/<int:admission_id>', methods=['PUT'])
def update_admission(admission_id):
    data = request.json
    table = get_table('Admissions')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'admission_id': admission_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/admissions/<int:admission_id>', methods=['DELETE'])
def delete_admission(admission_id):
    table = get_table('Admissions')
    response = table.delete_item(Key={'admission_id': admission_id})
    return jsonify(response), 204

# Procedures CRUD endpoints

@app.route('/procedures', methods=['POST'])
def create_procedure():
    data = request.json
    table = get_table('Procedures')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/procedures/<int:procedure_id>', methods=['GET'])
def get_procedure(procedure_id):
    table = get_table('Procedures')
    response = table.get_item(Key={'procedure_id': procedure_id})
    return jsonify(response.get('Item')), 200

@app.route('/procedures/<int:procedure_id>', methods=['PUT'])
def update_procedure(procedure_id):
    data = request.json
    table = get_table('Procedures')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'procedure_id': procedure_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/procedures/<int:procedure_id>', methods=['DELETE'])
def delete_procedure(procedure_id):
    table = get_table('Procedures')
    response = table.delete_item(Key={'procedure_id': procedure_id})
    return jsonify(response), 204

# Medications CRUD endpoints

@app.route('/medications', methods=['POST'])
def create_medication():
    data = request.json
    table = get_table('Medications')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/medications/<int:medication_id>', methods=['GET'])
def get_medication(medication_id):
    table = get_table('Medications')
    response = table.get_item(Key={'medication_id': medication_id})
    return jsonify(response.get('Item')), 200

@app.route('/medications/<int:medication_id>', methods=['PUT'])
def update_medication(medication_id):
    data = request.json
    table = get_table('Medications')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'medication_id': medication_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/medications/<int:medication_id>', methods=['DELETE'])
def delete_medication(medication_id):
    table = get_table('Medications')
    response = table.delete_item(Key={'medication_id': medication_id})
    return jsonify(response), 204

# Therapies CRUD endpoints

@app.route('/therapies', methods=['POST'])
def create_therapy():
    data = request.json
    table = get_table('Therapies')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/therapies/<int:therapy_id>', methods=['GET'])
def get_therapy(therapy_id):
    table = get_table('Therapies')
    response = table.get_item(Key={'therapy_id': therapy_id})
    return jsonify(response.get('Item')), 200

@app.route('/therapies/<int:therapy_id>', methods=['PUT'])
def update_therapy(therapy_id):
    data = request.json
    table = get_table('Therapies')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'therapy_id': therapy_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/therapies/<int:therapy_id>', methods=['DELETE'])
def delete_therapy(therapy_id):
    table = get_table('Therapies')
    response = table.delete_item(Key={'therapy_id': therapy_id})
    return jsonify(response), 204

# Discharges CRUD endpoints

@app.route('/discharges', methods=['POST'])
def create_discharge():
    data = request.json
    table = get_table('Discharges')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/discharges/<int:discharge_id>', methods=['GET'])
def get_discharge(discharge_id):
    table = get_table('Discharges')
    response = table.get_item(Key={'discharge_id': discharge_id})
    return jsonify(response.get('Item')), 200

@app.route('/discharges/<int:discharge_id>', methods=['PUT'])
def update_discharge(discharge_id):
    data = request.json
    table = get_table('Discharges')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'discharge_id': discharge_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/discharges/<int:discharge_id>', methods=['DELETE'])
def delete_discharge(discharge_id):
    table = get_table('Discharges')
    response = table.delete_item(Key={'discharge_id': discharge_id})
    return jsonify(response), 204

# IntakeOutput CRUD endpoints

@app.route('/intakeoutput', methods=['POST'])
def create_intake_output():
    data = request.json
    table = get_table('IntakeOutput')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/intakeoutput/<int:intake_output_id>', methods=['GET'])
def get_intake_output(intake_output_id):
    table = get_table('IntakeOutput')
    response = table.get_item(Key={'intake_output_id': intake_output_id})
    return jsonify(response.get('Item')), 200

@app.route('/intakeoutput/<int:intake_output_id>', methods=['PUT'])
def update_intake_output(intake_output_id):
    data = request.json
    table = get_table('IntakeOutput')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'intake_output_id': intake_output_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/intakeoutput/<int:intake_output_id>', methods=['DELETE'])
def delete_intake_output(intake_output_id):
    table = get_table('IntakeOutput')
    response = table.delete_item(Key={'intake_output_id': intake_output_id})
    return jsonify(response), 204

# FlowSheet CRUD endpoints Request 

@app.route('/flowsheet', methods=['POST'])
def create_flow_sheet():
    data = request.json
    table = get_table('FlowSheet')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/flowsheet/<int:flow_sheet_id>', methods=['GET'])
def get_flow_sheet(flow_sheet_id):
    table = get_table('FlowSheet')
    response = table.get_item(Key={'flow_sheet_id': flow_sheet_id})
    return jsonify(response.get('Item')), 200

@app.route('/flowsheet/<int:flow_sheet_id>', methods=['PUT'])
def update_flow_sheet(flow_sheet_id):
    data = request.json
    table = get_table('FlowSheet')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'flow_sheet_id': flow_sheet_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/flowsheet/<int:flow_sheet_id>', methods=['DELETE'])
def delete_flow_sheet(flow_sheet_id):
    table = get_table('FlowSheet')
    response = table.delete_item(Key={'flow_sheet_id': flow_sheet_id})
    return jsonify(response), 204

# PatientProgressNotes CRUD endpoints

@app.route('/patientprogressnotes', methods=['POST'])
def create_patient_progress_note():
    data = request.json
    table = get_table('PatientProgressNotes')
    response = table.put_item(Item=data)
    return jsonify(response), 201

@app.route('/patientprogressnotes/<int:progress_note_id>', methods=['GET'])
def get_patient_progress_note(progress_note_id):
    table = get_table('PatientProgressNotes')
    response = table.get_item(Key={'progress_note_id': progress_note_id})
    return jsonify(response.get('Item')), 200

@app.route('/patientprogressnotes/<int:progress_note_id>', methods=['PUT'])
def update_patient_progress_note(progress_note_id):
    data = request.json
    table = get_table('PatientProgressNotes')
    update_expression = "SET " + ", ".join(f"{k} = :{k}" for k in data.keys())
    expression_attribute_values = {f":{k}": v for k, v in data.items()}
    response = table.update_item(
        Key={'progress_note_id': progress_note_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values,
        ReturnValues="UPDATED_NEW"
    )
    return jsonify(response), 200

@app.route('/patientprogressnotes/<int:progress_note_id>', methods=['DELETE'])
def delete_patient_progress_note(progress_note_id):
    table = get_table('PatientProgressNotes')
    response = table.delete_item(Key={'progress_note_id': progress_note_id})
    return jsonify(response), 204

if __name__ == '__main__':
    app.run(debug=True)
