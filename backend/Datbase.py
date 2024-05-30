
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb', region_name='us-west-1')

def table_exists(table_name):
    try:
        table = dynamodb.Table(table_name)
        table.load()
        return True
    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceNotFoundException':
            return False
        else:
            raise

def create_patients_table():
    if not table_exists('Patients'):
        table = dynamodb.create_table(
            TableName='Patients',
            KeySchema=[
                {'AttributeName': 'patientId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'patientId', 'AttributeType': 'N'},
                {'AttributeName': 'patientFirstName', 'AttributeType': 'S'},
                {'AttributeName': 'patientLastName', 'AttributeType': 'S'},
                {'AttributeName': 'allergies', 'AttributeType': 'S'},
                {'AttributeName': 'favoriteNumber', 'AttributeType': 'S'},
                {'AttributeName': 'diagnosis', 'AttributeType': 'S'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_personnel_table():
    if not table_exists('Personnel'):
        table = dynamodb.create_table(
            TableName='Personnel',
            KeySchema=[
                {'AttributeName': 'personnelId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'personnelId', 'AttributeType': 'S'},
                {'AttributeName': 'personnelRole', 'AttributeType': 'S'},
                {'AttributeName': 'personnelPassWord', 'AttributeType': 'S'},
                {'AttributeName': 'personnelFirstName', 'AttributeType': 'S'},
                {'AttributeName': 'personnelLastName', 'AttributeType': 'S'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_patient_forms_table():
    if not table_exists('PatientForms'):
        table = dynamodb.create_table(
            TableName='PatientForms',
            KeySchema=[
                {'AttributeName': 'formId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'patientId', 'AttributeType': 'N'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_nurse_signatures_table():
    if not table_exists('NurseSignatures'):
        table = dynamodb.create_table(
            TableName='NurseSignatures',
            KeySchema=[
                {'AttributeName': 'signatureId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'signatureId', 'AttributeType': 'N'},
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'personnelId', 'AttributeType': 'S'},
                {'AttributeName': 'signatureImageS3BucketLocation', 'AttributeType': 'S'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_admissions_and_discharge_table():
    if not table_exists('AdmissionsAndDischarge'):
        table = dynamodb.create_table(
            TableName='AdmissionsAndDischarge',
            KeySchema=[
                {'AttributeName': 'formId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'patientId', 'AttributeType': 'N'},
                {'AttributeName': 'isAdmission', 'AttributeType': 'BOOL'},
                {'AttributeName': 'date', 'AttributeType': 'S'},
                {'AttributeName': 'time', 'AttributeType': 'S'},
                {'AttributeName': 'mode', 'AttributeType': 'S'},
                {'AttributeName': 'safetyMeasures', 'AttributeType': 'S'},
                {'AttributeName': 'patientStability', 'AttributeType': 'BOOL'},
                {'AttributeName': 'gTubeOrTrach', 'AttributeType': 'BOOL'},
                {'AttributeName': 'generalAssessment', 'AttributeType': 'BOOL'},
                {'AttributeName': 'additionalComments', 'AttributeType': 'S'},
                {'AttributeName': 'nurseSignatureId', 'AttributeType': 'S'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_procedures_table():
    if not table_exists('Procedures'):
        table = dynamodb.create_table(
            TableName='Procedures',
            KeySchema=[
                {'AttributeName': 'procedureId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'procedureId', 'AttributeType': 'N'},
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'time', 'AttributeType': 'S'},
                {'AttributeName': 'procedure', 'AttributeType': 'S'},
                {'AttributeName': 'precautions', 'AttributeType': 'S'},
                {'AttributeName': 'comments', 'AttributeType': 'S'},
                {'AttributeName': 'nurseSignatureId', 'AttributeType': 'S'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_medications_table():
    if not table_exists('Medications'):
        table = dynamodb.create_table(
            TableName='Medications',
            KeySchema=[
                {'AttributeName': 'medication_id', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'medication_id', 'AttributeType': 'N'},
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'mdOrder', 'AttributeType': 'BOOL'},
                {'AttributeName': 'prn', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsUniversal', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsAsepticTechnique', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsSterileTechnique', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionSafety', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsWheelchairLockers', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsClearPathway', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsSkinIntegrity', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsFall', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsElevatedHeadOfBed', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsFowlerPosition', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsSaidRailsUp', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsBedLocker', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsCardiac', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsReflux', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsAspiration', 'AttributeType': 'BOOL'},
                {'AttributeName': 'precautionsGastronomy', 'AttributeType': 'BOOL'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_therapies_table():
    if not table_exists('Therapies'):
        table = dynamodb.create_table(
            TableName='Therapies',
            KeySchema=[
                {'AttributeName': 'therapyId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'therapyId', 'AttributeType': 'N'},
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'pt', 'AttributeType': 'BOOL'},
                {'AttributeName': 'ot', 'AttributeType': 'BOOL'},
                {'AttributeName': 'st', 'AttributeType': 'BOOL'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_intake_output_table():
    if not table_exists('IntakeOutput'):
        table = dynamodb.create_table(
            TableName='IntakeOutput',
            KeySchema=[
                {'AttributeName': 'intakeOutputId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'intakeOutputId', 'AttributeType': 'N'},
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'time', 'AttributeType': 'S'},
                {'AttributeName': 'po', 'AttributeType': 'S'},
                {'AttributeName': 'gTube', 'AttributeType': 'S'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_flow_sheet_table():
    if not table_exists('FlowSheet'):
        table = dynamodb.create_table(
            TableName='FlowSheet',
            KeySchema=[
                {'AttributeName': 'flowsheetId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'flowsheetId', 'AttributeType': 'N'},
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'time', 'AttributeType': 'S'},
                {'AttributeName': 'vitalSignsTemperature', 'AttributeType': 'N'},
                {'AttributeName': 'vitalSignsBloodPressure', 'AttributeType': 'S'},
                {'AttributeName': 'vitalSignsHeartRate', 'AttributeType': 'N'},
                {'AttributeName': 'vitalSignsRespiratoryRate', 'AttributeType': 'N'},
                {'AttributeName': 'vitalSignsPainScale', 'AttributeType': 'N'},
                {'AttributeName': 'neurologicalLevelOfConsciousness', 'AttributeType': 'S'},
                {'AttributeName': 'neurologicalActivity', 'AttributeType': 'S'},
                {'AttributeName': 'respiratoryEffort', 'AttributeType': 'S'},
                {'AttributeName': 'respiratoryBreathSounds', 'AttributeType': 'S'},
                {'AttributeName': 'respiratoryFio2LxM', 'AttributeType': 'S'},
                {'AttributeName': 'respiratorySao2', 'AttributeType': 'N'},
                {'AttributeName': 'cardiacHeartSounds', 'AttributeType': 'S'},
                {'AttributeName': 'cardiacRhythm', 'AttributeType': 'S'},
                {'AttributeName': 'cardiacPeripheralPulse', 'AttributeType': 'S'},
                {'AttributeName': 'cardiacCapillaryRefill', 'AttributeType': 'S'},
                {'AttributeName': 'cardiacColor', 'AttributeType': 'S'},
                {'AttributeName': 'gastrointestinalAbdomen', 'AttributeType': 'S'},
                {'AttributeName': 'gastrointestinalGTubeJTube', 'AttributeType': 'S'},
                {'AttributeName': 'gastrointestinalBowelSounds', 'AttributeType': 'S'},
                {'AttributeName': 'gastrointestinalMouth', 'AttributeType': 'S'},
                {'AttributeName': 'gastrointestinalStools', 'AttributeType': 'S'},
                {'AttributeName': 'skinSolor', 'AttributeType': 'S'},
                {'AttributeName': 'skinCondition', 'AttributeType': 'S'},
                {'AttributeName': 'skinTemperature', 'AttributeType': 'S'},
                {'AttributeName': 'urinaryOutputVoiding', 'AttributeType': 'S'},
                {'AttributeName': 'urinaryOutputCatheterization', 'AttributeType': 'BOOL'},
                {'AttributeName': 'urinaryOutputAdls', 'AttributeType': 'S'},
                {'AttributeName': 'urinaryOutputDiapers', 'AttributeType': 'BOOL'},
                {'AttributeName': 'urinaryOutputEmesis', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentGlasses', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentSplintsOrthotics', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentMonitors', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentFeedingPump', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentPortableSuction', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentHearingAid', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentOxygen', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentWheelchair', 'AttributeType': 'BOOL'},
                {'AttributeName': 'equipmentNebulizer', 'AttributeType': 'BOOL'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_patient_progress_notes_table():
    if not table_exists('PatientProgressNotes'):
        table = dynamodb.create_table(
            TableName='PatientProgressNotes',
            KeySchema=[
                {'AttributeName': 'progressNoteId', 'KeyType': 'HASH'}
            ],
            AttributeDefinitions=[
                {'AttributeName': 'progressNoteId', 'AttributeType': 'N'},
                {'AttributeName': 'formId', 'AttributeType': 'N'},
                {'AttributeName': 'type', 'AttributeType': 'S'},
                {'AttributeName': 'time', 'AttributeType': 'S'},
                {'AttributeName': 'notes', 'AttributeType': 'S'},
                {'AttributeName': 'nurseSignatureId', 'AttributeType': 'S'}
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        return table
    return None

def create_all_tables():
    tables_to_create = [
        create_patients_table,
        create_personnel_table,
        create_patient_forms_table,
        create_nurse_signatures_table,
        create_admissions_and_discharge_table,
        create_procedures_table,
        create_medications_table,
        create_therapies_table,
        create_intake_output_table,
        create_flow_sheet_table,
        create_patient_progress_notes_table
    ]
    
    for create_table_func in tables_to_create:
        table = create_table_func()
        if table:
            table.meta.client.get_waiter('table_exists').wait(TableName=table.table_name)
            print(f"Table {table.table_name} created successfully.")
        else:
            print(f"Table {create_table_func.__name__.replace('create_', '').replace('_table', '').title()} already exists.")

if __name__ == '__main__':
    create_all_tables()





###CRUD OPERATIONS
import boto3
import json
### Create Operations

#### Create Patient
dynamodb = boto3.resource('dynamodb')
patients_table = dynamodb.Table('Patients')
def lambda_handler(event, context):
    patient_data = {
        'patientId': event['patientId'],
        'patientFirstName': event['patientFirstName'],
        'patientLastName': event['patientLastName'],
        'allergies': event['allergies'],
        'favoriteNumber': event['favoriteNumber'],
        'diagnosis': event['diagnosis']
    }
    
    patients_table.put_item(Item=patient_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Patient created successfully')
    }

#### Create Personnel
dynamodb = boto3.resource('dynamodb')
personnel_table = dynamodb.Table('Personnel')
def lambda_handler(event, context):
    personnel_data = {
        'personnelId': event['personnelId'],
        'personnelRole': event['personnelRole'],
        'personnelPassWord': event['personnelPassWord'],
        'personnelFirstName': event['personnelFirstName'],
        'personnelLastName': event['personnelLastName']
    }
    
    personnel_table.put_item(Item=personnel_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Personnel created successfully')
    }

#### Create PatientForm
dynamodb = boto3.resource('dynamodb')
patient_forms_table = dynamodb.Table('PatientForms')
def lambda_handler(event, context):
    form_data = {
        'formId': event['formId'],
        'patientId': event['patientId']
    }
    patient_forms_table.put_item(Item=form_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('PatientForm created successfully')
    }

#### Create NurseSignature
dynamodb = boto3.resource('dynamodb')
nurse_signatures_table = dynamodb.Table('NurseSignatures')
def lambda_handler(event, context):
    signature_data = {
        'signatureId': event['signatureId'],
        'formId': event['formId'],
        'personnelId': event['personnelId'],
        'signatureImageS3BucketLocation': event['signatureImageS3BucketLocation']
    }
    
    nurse_signatures_table.put_item(Item=signature_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('NurseSignature created successfully')
    }

#### Create AdmissionsAndDischarge
dynamodb = boto3.resource('dynamodb')
admissions_discharge_table = dynamodb.Table('AdmissionsAndDischarge')
def lambda_handler(event, context):
    admission_discharge_data = {
        'formId': event['formId'],
        'patientId': event['patientId'],
        'isAdmission': event['isAdmission'],
        'date': event['date'],
        'time': event['time'],
        'mode': event['mode'],
        'safetyMeasures': event['safetyMeasures'],
        'patientStability': event['patientStability'],
        'gTubeOrTrach': event['gTubeOrTrach'],
        'generalAssessment': event['generalAssessment'],
        'additionalComments': event['additionalComments'],
        'nurseSignatureId': event['nurseSignatureId']
    }
    
    admissions_discharge_table.put_item(Item=admission_discharge_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('AdmissionsAndDischarge record created successfully')
    }

#### Create Procedure
dynamodb = boto3.resource('dynamodb')
procedures_table = dynamodb.Table('Procedures')
def lambda_handler(event, context):
    procedure_data = {
        'procedureId': event['procedureId'],
        'formId': event['formId'],
        'time': event['time'],
        'procedure': event['procedure'],
        'precautions': event['precautions'],
        'comments': event['comments'],
        'nurseSignatureId': event['nurseSignatureId']
    }
    
    procedures_table.put_item(Item=procedure_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Procedure created successfully')
    }

#### Create Medication
dynamodb = boto3.resource('dynamodb')
medications_table = dynamodb.Table('Medications')
def lambda_handler(event, context):
    medication_data = {
        'medication_id': event['medication_id'],
        'formId': event['formId'],
        'mdOrder': event['mdOrder'],
        'prn': event['prn'],
        'precautionsUniversal': event['precautionsUniversal'],
        'precautionsAsepticTechnique': event['precautionsAsepticTechnique'],
        'precautionsSterileTechnique': event['precautionsSterileTechnique'],
        'precautionSafety': event['precautionSafety'],
        'precautionsWheelchairLockers': event['precautionsWheelchairLockers'],
        'precautionsClearPathway': event['precautionsClearPathway'],
        'precautionsSkinIntegrity': event['precautionsSkinIntegrity'],
        'precautionsFall': event['precautionsFall'],
        'precautionsElevatedHeadOfBed': event['precautionsElevatedHeadOfBed'],
        'precautionsFowlerPosition': event['precautionsFowlerPosition'],
        'precautionsSaidRailsUp': event['precautionsSaidRailsUp'],
        'precautionsBedLocker': event['precautionsBedLocker'],
        'precautionsCardiac': event['precautionsCardiac'],
        'precautionsReflux': event['precautionsReflux'],
        'precautionsAspiration': event['precautionsAspiration'],
        'precautionsGastronomy': event['precautionsGastronomy']
    }
    
    medications_table.put_item(Item=medication_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Medication created successfully')
    }

#### Create Therapy
dynamodb = boto3.resource('dynamodb')
therapies_table = dynamodb.Table('Therapies')
def lambda_handler(event, context):
    therapy_data = {
        'therapyId': event['therapyId'],
        'formId': event['formId'],
        'pt': event['pt'],
        'ot': event['ot'],
        'st': event['st']
    }
    
    therapies_table.put_item(Item=therapy_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Therapy created successfully')
    }

#### Create IntakeOutput
dynamodb = boto3.resource('dynamodb')
intake_output_table = dynamodb.Table('IntakeOutput')
def lambda_handler(event, context):
    intake_output_data = {
        'intakeOutputId': event['intakeOutputId'],
        'formId': event['formId'],
        'time': event['time'],
        'po': event['po'],
        'gTube': event['gTube']
    }
    
    intake_output_table.put_item(Item=intake_output_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('IntakeOutput record created successfully')
    }

#### Create FlowSheet
dynamodb = boto3.resource('dynamodb')
flowsheet_table = dynamodb.Table('FlowSheet')
def lambda_handler(event, context):
    flowsheet_data = {
        'flowsheetId': event['flowsheetId'],
        'formId': event['formId'],
        'time': event['time'],
        'vitalSignsTemperature': event['vitalSignsTemperature'],
        'vitalSignsBloodPressure': event['vitalSignsBloodPressure'],
        'vitalSignsHeartRate': event['vitalSignsHeartRate'],
        'vitalSignsRespiratoryRate': event['vitalSignsRespiratoryRate'],
        'vitalSignsPainScale': event['vitalSignsPainScale'],
        'neurologicalLevelOfConsciousness': event['neurologicalLevelOfConsciousness'],
        'neurologicalActivity': event['neurologicalActivity'],
        'respiratoryEffort': event['respiratoryEffort'],
        'respiratoryBreathSounds': event['respiratoryBreathSounds'],
        'respiratoryFio2LxM': event['respiratoryFio2LxM'],
        'respiratorySao2': event['respiratorySao2'],
        'cardiacHeartSounds': event['cardiacHeartSounds'],
        'cardiacRhythm': event['cardiacRhythm'],
        'cardiacPeripheralPulse': event['cardiacPeripheralPulse'],
        'cardiacCapillaryRefill': event['cardiacCapillaryRefill'],
        'cardiacColor': event['cardiacColor'],
        'gastrointestinalAbdomen': event['gastrointestinalAbdomen'],
        'gastrointestinalGTubeJTube': event['gastrointestinalGTubeJTube'],
        'gastrointestinalBowelSounds': event['gastrointestinalBowelSounds'],
        'gastrointestinalMouth': event['gastrointestinalMouth'],
        'gastrointestinalStools': event['gastrointestinalStools'],
        'skinSolor': event['skinSolor'],
        'skinCondition': event['skinCondition'],
        'skinTemperature': event['skinTemperature'],
        'urinaryOutputVoiding': event['urinaryOutputVoiding'],
        'urinaryOutputCatheterization': event['urinaryOutputCatheterization'],
        'urinaryOutputAdls': event['urinaryOutputAdls'],
        'urinaryOutputDiapers': event['urinaryOutputDiapers'],
        'urinaryOutputEmesis': event['urinaryOutputEmesis'],
        'equipmentGlasses': event['equipmentGlasses'],
        'equipmentSplintsOrthotics': event['equipmentSplintsOrthotics'],
        'equipmentMonitors': event['equipmentMonitors'],
        'equipmentFeedingPump': event['equipmentFeedingPump'],
        'equipmentPortableSuction': event['equipmentPortableSuction'],
        'equipmentHearingAid': event['equipmentHearingAid'],
        'equipmentOxygen': event['equipmentOxygen'],
        'equipmentWheelchair': event['equipmentWheelchair'],
        'equipmentNebulizer': event['equipmentNebulizer']
    }
    flowsheet_table.put_item(Item=flowsheet_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('FlowSheet record created successfully')
    }

#### Create PatientProgressNote
dynamodb = boto3.resource('dynamodb')
progress_notes_table = dynamodb.Table('PatientProgressNotes')
def lambda_handler(event, context):
    progress_note_data = {
        'progressNoteId': event['progressNoteId'],
        'formId': event['formId'],
        'type': event['type'],
        'time': event['time'],
        'notes': event['notes'],
        'nurseSignatureId': event['nurseSignatureId']
    }
    
    progress_notes_table.put_item(Item=progress_note_data)
    
    return {
        'statusCode': 200,
        'body': json.dumps('PatientProgressNote created successfully')
    }

### Read Operations

#### Get Patient
dynamodb = boto3.resource('dynamodb')
patients_table = dynamodb.Table('Patients')
def lambda_handler(event, context):
    patient_id = event['patientId']
    response = patients_table.get_item(
        Key={
            'patientId': patient_id
        }
    )
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('Patient not found')
        }

#### Get Personnel
dynamodb = boto3.resource('dynamodb')
personnel_table = dynamodb.Table('Personnel')
def lambda_handler(event, context):
    personnel_id = event['personnelId']
    response = personnel_table.get_item(
        Key={
            'personnelId': personnel_id
        }
    )
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('Personnel not found')
        }

#### Get PatientForm
dynamodb = boto3.resource('dynamodb')
patient_forms_table = dynamodb.Table('PatientForms')
def lambda_handler(event, context):
    form_id = event['formId']
    response = patient_forms_table.get_item(
        Key={
            'formId': form_id
        }
    )
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('PatientForm not found')
        }
        
#### Get NurseSignature
dynamodb = boto3.resource('dynamodb')
nurse_signatures_table = dynamodb.Table('NurseSignatures')
def lambda_handler(event, context):
    signature_id = event['signatureId']
    response = nurse_signatures_table.get_item(
        Key={
            'signatureId': signature_id
        }
    )
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('NurseSignature not found')
        }

#### Get AdmissionsAndDischarge
dynamodb = boto3.resource('dynamodb')
admissions_discharge_table = dynamodb.Table('AdmissionsAndDischarge')
def lambda_handler(event, context):
    form_id = event['formId']
    response = admissions_discharge_table.get_item(
        Key={
            'formId': form_id
        }
    )
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('AdmissionsAndDischarge record not found')
        }

#### Get Procedure
dynamodb = boto3.resource('dynamodb')
procedures_table = dynamodb.Table('Procedures')
def lambda_handler(event, context):
    procedure_id = event['procedureId']
    response = procedures_table.get_item(
        Key={
            'procedureId': procedure_id
        }
    )  
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('Procedure not found')
        }

#### Get Medication
dynamodb = boto3.resource('dynamodb')
medications_table = dynamodb.Table('Medications')
def lambda_handler(event, context):
    medication_id = event['medication_id']
    response = medications_table.get_item(
        Key={
            'medication_id': medication_id
        }
    )
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('Medication not found')
        }

#### Get Therapy
dynamodb = boto3.resource('dynamodb')
therapies_table = dynamodb.Table('Therapies')
def lambda_handler(event, context):
    therapy_id = event['therapyId']
    response = therapies_table.get_item(
        Key={
            'therapyId': therapy_id
        }
    )
    
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('Therapy not found')
        }

#### Get IntakeOutput
dynamodb = boto3.resource('dynamodb')
intake_output_table = dynamodb.Table('IntakeOutput')
def lambda_handler(event, context):
    intake_output_id = event['intakeOutputId']
    response = intake_output_table.get_item(
        Key={
            'intakeOutputId': intake_output_id
        }
    )
    
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('IntakeOutput record not found')
        }

#### Get FlowSheet
dynamodb = boto3.resource('dynamodb')
flowsheet_table = dynamodb.Table('FlowSheet')
def lambda_handler(event, context):
    flowsheet_id = event['flowsheetId']
    response = flowsheet_table.get_item(
        Key={
            'flowsheetId': flowsheet_id
        }
    )
    
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('FlowSheet record not found')
        }

#### Get PatientProgressNote
dynamodb = boto3.resource('dynamodb')
progress_notes_table = dynamodb.Table('PatientProgressNotes')
def lambda_handler(event, context):
    progress_note_id = event['progressNoteId']
    response = progress_notes_table.get_item(
        Key={
            'progressNoteId': progress_note_id
        }
    )
    
    if 'Item' in response:
        return {
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }
    else:
        return {
            'statusCode': 404,
            'body': json.dumps('PatientProgressNote not found')
        }

### Update Operations

#### Update Patient
dynamodb = boto3.resource('dynamodb')
patients_table = dynamodb.Table('Patients')
def lambda_handler(event, context):
    patient_id = event['patientId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'patientId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    patients_table.update_item(
        Key={'patientId': patient_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Patient updated successfully')
    }

#### Update Personnel
dynamodb = boto3.resource('dynamodb')
personnel_table = dynamodb.Table('Personnel')
def lambda_handler(event, context):
    personnel_id = event['personnelId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'personnelId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    personnel_table.update_item(
        Key={'personnelId': personnel_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Personnel updated successfully')
    }

#### Update PatientForm
dynamodb = boto3.resource('dynamodb')
patient_forms_table = dynamodb.Table('PatientForms')
def lambda_handler(event, context):
    form_id = event['formId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'formId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    patient_forms_table.update_item(
        Key={'formId': form_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    return {
        'statusCode': 200,
        'body': json.dumps('PatientForm updated successfully')
    }

#### Update NurseSignature
dynamodb = boto3.resource('dynamodb')
nurse_signatures_table = dynamodb.Table('NurseSignatures')
def lambda_handler(event, context):
    signature_id = event['signatureId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'signatureId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    nurse_signatures_table.update_item(
        Key={'signatureId': signature_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    return {
        'statusCode': 200,
        'body': json.dumps('NurseSignature updated successfully')
    }

#### Update AdmissionsAndDischarge
dynamodb = boto3.resource('dynamodb')
admissions_discharge_table = dynamodb.Table('AdmissionsAndDischarge')
def lambda_handler(event, context):
    form_id = event['formId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'formId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    admissions_discharge_table.update_item(
        Key={'formId': form_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('AdmissionsAndDischarge record updated successfully')
    }
    
#### Update Procedure
dynamodb = boto3.resource('dynamodb')
procedures_table = dynamodb.Table('Procedures')
def lambda_handler(event, context):
    procedure_id = event['procedureId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'procedureId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    procedures_table.update_item(
        Key={'procedureId': procedure_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Procedure updated successfully')
    }

#### Update Medication
dynamodb = boto3.resource('dynamodb')
medications_table = dynamodb.Table('Medications')
def lambda_handler(event, context):
    medication_id = event['medication_id']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'medication_id':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    medications_table.update_item(
        Key={'medication_id': medication_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    ) 
    return {
        'statusCode': 200,
        'body': json.dumps('Medication updated successfully')
    }

#### Update Therapy
dynamodb = boto3.resource('dynamodb')
therapies_table = dynamodb.Table('Therapies')
def lambda_handler(event, context):
    therapy_id = event['therapyId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'therapyId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    therapies_table.update_item(
        Key={'therapyId': therapy_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Therapy updated successfully')
    }

#### Update IntakeOutput
dynamodb = boto3.resource('dynamodb')
intake_output_table = dynamodb.Table('IntakeOutput')
def lambda_handler(event, context):
    intake_output_id = event['intakeOutputId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'intakeOutputId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    intake_output_table.update_item(
        Key={'intakeOutputId': intake_output_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('IntakeOutput record updated successfully')
    }

#### Update FlowSheet
dynamodb = boto3.resource('dynamodb')
flowsheet_table = dynamodb.Table('FlowSheet')
def lambda_handler(event, context):
    flowsheet_id = event['flowsheetId']
    update_expression = "set "
    expression_attribute_values = {}
    
    for key, value in event.items():
        if key != 'flowsheetId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    flowsheet_table.update_item(
        Key={'flowsheetId': flowsheet_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('FlowSheet record updated successfully')
    }

#### Update PatientProgressNote
dynamodb = boto3.resource('dynamodb')
progress_notes_table = dynamodb.Table('PatientProgressNotes')
def lambda_handler(event, context):
    progress_note_id = event['progressNoteId']
    update_expression = "set "
    expression_attribute_values = {}
  
    for key, value in event.items():
        if key != 'progressNoteId':
            update_expression += f"{key} = :{key}, "
            expression_attribute_values[f":{key}"] = value
    
    update_expression = update_expression.rstrip(', ')
    
    progress_notes_table.update_item(
        Key={'progressNoteId': progress_note_id},
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_attribute_values
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('PatientProgressNote updated successfully')
    }

### Delete Operations

#### Delete Patient
dynamodb = boto3.resource('dynamodb')
patients_table = dynamodb.Table('Patients')
def lambda_handler(event, context):
    patient_id = event['patientId']
    patients_table.delete_item(
        Key={
            'patientId': patient_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Patient deleted successfully')
    }

#### Delete Personnel
dynamodb = boto3.resource('dynamodb')
personnel_table = dynamodb.Table('Personnel')
def lambda_handler(event, context):
    personnel_id = event['personnelId']
    personnel_table.delete_item(
        Key={
            'personnelId': personnel_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Personnel deleted successfully')
    }

#### Delete PatientForm
dynamodb = boto3.resource('dynamodb')
patient_forms_table = dynamodb.Table('PatientForms')
def lambda_handler(event, context):
    form_id = event['formId']
    patient_forms_table.delete_item(
        Key={
            'formId': form_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('PatientForm deleted successfully')
    }

#### Delete NurseSignature
dynamodb = boto3.resource('dynamodb')
nurse_signatures_table = dynamodb.Table('NurseSignatures')
def lambda_handler(event, context):
    signature_id = event['signatureId']
    nurse_signatures_table.delete_item(
        Key={
            'signatureId': signature_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('NurseSignature deleted successfully')
    }

#### Delete AdmissionsAndDischarge
dynamodb = boto3.resource('dynamodb')
admissions_discharge_table = dynamodb.Table('AdmissionsAndDischarge')
def lambda_handler(event, context):
    form_id = event['formId']
    admissions_discharge_table.delete_item(
        Key={
            'formId': form_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('AdmissionsAndDischarge record deleted successfully')
    }

#### Delete Procedure
dynamodb = boto3.resource('dynamodb')
procedures_table = dynamodb.Table('Procedures')
def lambda_handler(event, context):
    procedure_id = event['procedureId']
    procedures_table.delete_item(
        Key={
            'procedureId': procedure_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Procedure deleted successfully')
    }

#### Delete Medication
dynamodb = boto3.resource('dynamodb')
medications_table = dynamodb.Table('Medications')
def lambda_handler(event, context):
    medication_id = event['medication_id']
    medications_table.delete_item(
        Key={
            'medication_id': medication_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Medication deleted successfully')
    }

#### Delete Therapy
dynamodb = boto3.resource('dynamodb')
therapies_table = dynamodb.Table('Therapies')
def lambda_handler(event, context):
    therapy_id = event['therapyId']
    therapies_table.delete_item(
        Key={
            'therapyId': therapy_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Therapy deleted successfully')
    }

#### Delete IntakeOutput
dynamodb = boto3.resource('dynamodb')
intake_output_table = dynamodb.Table('IntakeOutput')
def lambda_handler(event, context):
    intake_output_id = event['intakeOutputId']
    intake_output_table.delete_item(
        Key={
            'intakeOutputId': intake_output_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('IntakeOutput record deleted successfully')
    }

#### Delete FlowSheet
dynamodb = boto3.resource('dynamodb')
flowsheet_table = dynamodb.Table('FlowSheet')
def lambda_handler(event, context):
    flowsheet_id = event['flowsheetId']
    flowsheet_table.delete_item(
        Key={
            'flowsheetId': flowsheet_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('FlowSheet record deleted successfully')
    }

#### Delete PatientProgressNote
dynamodb = boto3.resource('dynamodb')
progress_notes_table = dynamodb.Table('PatientProgressNotes')
def lambda_handler(event, context):
    progress_note_id = event['progressNoteId']
    progress_notes_table.delete_item(
        Key={
            'progressNoteId': progress_note_id
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('PatientProgressNote deleted successfully')
    }
