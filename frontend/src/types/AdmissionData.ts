interface ArrivalDepartureData
{
    date: any;
    time: any;
    mode: 'caregiver' | 'transportation' | 'ambulance' | undefined
    safetyMeasures: boolean;

    patientStability: {
        vsWsl: boolean;
        gTubeOrTrach: boolean;
    }

    generalAssessment: boolean;
    additionalComments: string;

    nurseSign: {
        fullName: string;
        nurseID: string;
    }
}

export class Procedure
{
    time: any;
    procedure: string;
    precautions: string;
    comments: string;

    constructor() {
        this.time = undefined;
        this.procedure = '';
        this.precautions = '';
        this.comments = '';
    }
}

export class FlowSheetData {
    time: any;

    vitalSigns: {
        temperature: any;
        bloodPressure: any;
        heartRate: any;
        respiratoryRate: any;
        painScale: any;
    };

    neurological: {
        levelOfConsciousness: any;
        activity: any;
    };

    respiratory: {
        effort: any;
        breathSounds: any;
        fio2LxM: any;
        sao2: any
    };

    cardiac: {
        heartSounds: any;
        rhythm: any;
        peripheralPulse: any;
        capillaryRefill: any;
        color: any
    };

    gastrointestinal: {
        abdomen: any;
        gTubeJTube: any;
        bowelSounds: any;
        mouth: any;
        stools: any
    };

    skin: {
        color: any;
        condition: any;
        temperature: any
    };

    urinaryOutput: {
        voiding: any;
        catheterization: any;
        adls: any;
        diapers: any;
        emesis: any
    };

    equipment: {
        glasses: any;
        splintsOrthotics: any;
        monitors: any;
        feedingPump: any;
        portableSuction: any;
        hearingAid: any;
        oxygen: any;
        wheelchair: any;
        nebulizer: any
    }
    
    constructor() {
        this.time = undefined;
        
        this.vitalSigns = {
            temperature: undefined,
            bloodPressure: undefined,
            heartRate: undefined,
            respiratoryRate: undefined,
            painScale: undefined
        };

        this.neurological = {
            levelOfConsciousness: undefined,
            activity: undefined
        };

        this.respiratory = {
            effort: undefined,
            breathSounds: undefined,
            fio2LxM: undefined,
            sao2: undefined
        };

        this.cardiac = {
            heartSounds: undefined,
            rhythm: undefined,
            peripheralPulse: undefined,
            capillaryRefill: undefined,
            color: undefined
        };

        this.gastrointestinal = {
            abdomen: undefined,
            gTubeJTube: undefined,
            bowelSounds: undefined,
            mouth: undefined,
            stools: undefined
        };

        this.skin = {
            color: undefined,
            condition: undefined,
            temperature: undefined
        };

        this.urinaryOutput = {
            voiding: undefined,
            catheterization: undefined,
            adls: undefined,
            diapers: undefined,
            emesis: undefined
        };

        this.equipment = {
            glasses: undefined,
            splintsOrthotics: undefined,
            monitors: undefined,
            feedingPump: undefined,
            portableSuction: undefined,
            hearingAid: undefined,
            oxygen: undefined,
            wheelchair: undefined,
            nebulizer: undefined
        }
    }
}

export default class AdmissionData {
    testBool: boolean;

    patientFirstName: string;
    patientLastName: string;
    // date: any;
    allergies: any;
    
    arrival: ArrivalDepartureData;
    
    procedures: Procedure[];

    medications: {
        mdOrder: boolean;
        prn: boolean;
    };

    otherComments: any;
    
    therapies: {
        pt: boolean;
        ot: boolean;
        st: boolean;
    };

    discharge: ArrivalDepartureData;

    intakeOutput: any[];
    
    flowSheet: {
        am: FlowSheetData,
        pm: FlowSheetData
    };

    progressNotes: {
        date: any;
        time: any;
        notes: any;
        nurseSignature: any;
    };

    constructor() {
        this.patientFirstName = '';
        this.patientLastName = '';
        // this.date = undefined;
        this.allergies = '';

        this.arrival = {
            date: undefined,
            time: undefined,
            mode: undefined,
            safetyMeasures: false,

            patientStability: {
                vsWsl: false,
                gTubeOrTrach: false
            },
        
            generalAssessment: false,
            additionalComments: '',
        
            nurseSign: {
                fullName: '',
                nurseID: ''
            }
        };
        
        // this.arrivalTime = undefined;
        // this.modeOfArrival = undefined;
        // this.safetyMeasures = undefined;
        // this.patientStable = undefined;
        // this.gTubeOrTrach = undefined;
        // this.generalAssessment = undefined;
        // this.additionalComments = undefined;
        // this.nurseSign = undefined;
        this.procedures = [new Procedure()] as Procedure[];
        this.medications = {
            mdOrder: false,
            prn: false
        };
        
        this.otherComments = undefined;

        this.testBool = false;

        this.therapies = {
            pt: false,
            ot: false,
            st: false
        };

        // this.dischargeTime = undefined;
        // this.modeOfDischarge = undefined;

        this.discharge = {
            date: undefined,
            time: undefined,
            mode: undefined,
            safetyMeasures: false,

            patientStability: {
                vsWsl: false,
                gTubeOrTrach: false
            },
        
            generalAssessment: false,
            additionalComments: '',
        
            nurseSign: {
                fullName: '',
                nurseID: ''
            }
        };

        this.intakeOutput = [];
        this.flowSheet = {
            am: new FlowSheetData(),
            pm: new FlowSheetData()
        }

        this.progressNotes = {
            date: undefined,
            time: undefined,
            notes: undefined,
            nurseSignature: undefined
        };
    }
}

