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

export default class AdmissionData {
    patientFirstName: string;
    patientLastName: string;
    // date: any;
    allergies: any;
    arrival: ArrivalDepartureData;
    // arrivalTime: any;
    // modeOfArrival: any;
    // safetyMeasures: any;
    // patientStable: any;
    // gTubeOrTrach: any;
    // generalAssessment: any;
    // additionalComments: any;
    // nurseSign: any;
    procedures: Procedure[];
    medicationsAdministered: any;
    medicationsPRN: any;
    otherComments: any;
    
    therapies: {
        pt: any;
        ot: any;
        st: any;
    };

    discharge: ArrivalDepartureData;
    // dischargeTime: any;
    // modeOfDischarge: any;
    intakeOutput: any[];
    flowSheet: {
        time: any;
        temperature: any;
        bloodPressure: any;
        heartRate: any;
        respiratoryRate: any;
        painScale: any;

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
        this.medicationsAdministered = undefined;
        this.medicationsPRN = undefined;
        this.otherComments = undefined;

        this.therapies = {
            pt: undefined,
            ot: undefined,
            st: undefined
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
            time: undefined,
            temperature: undefined,
            bloodPressure: undefined,
            heartRate: undefined,
            respiratoryRate: undefined,
            painScale: undefined,
            neurological: {
                levelOfConsciousness: undefined,
                activity: undefined
            },

            respiratory: {
                effort: undefined,
                breathSounds: undefined,
                fio2LxM: undefined,
                sao2: undefined
            },

            cardiac: {
                heartSounds: undefined,
                rhythm: undefined,
                peripheralPulse: undefined,
                capillaryRefill: undefined,
                color: undefined
            },

            gastrointestinal: {
                abdomen: undefined,
                gTubeJTube: undefined,
                bowelSounds: undefined,
                mouth: undefined,
                stools: undefined
            },

            skin: {
                color: undefined,
                condition: undefined,
                temperature: undefined
            },

            urinaryOutput: {
                voiding: undefined,
                catheterization: undefined,
                adls: undefined,
                diapers: undefined,
                emesis: undefined
            },

            equipment: {
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
        };

        this.progressNotes = {
            date: undefined,
            time: undefined,
            notes: undefined,
            nurseSignature: undefined
        };
    }
}

