<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { db } from "../firebase.js";
import { getDoc } from 'firebase/firestore';

//Toggles and Percentage
const surveyReturnToggle = ref(true);
const sketchPlanToggle = ref(true);
const topographicPlanToggle = ref(true);
const caadApplicationToggle = ref(true);
const surveyProgressPercentage = ref();

//Declaration of Survey Return
const ldcOfMotherlotAndPreviousPlan = ref(false);
const blPlanPrinted = ref(false);
const blPlanSigned = ref(false);
const eSurvey = ref(false);
const fieldNotesFieldNotesCover = ref(false);
const certifiedCopyOfTaxDeclaration = ref(false);
const certifiedCopyOfTitle = ref(false);
const transmittal = ref(false);
const surveyAuthority = ref(false);
const geodeticEngineersSignature = ref(false);

const sentToEvelynBaloviaGrandTours = ref(false);
const frontDesk	= ref(false);
const ivasTransactionID	= ref(false);
const verifiers	= ref(false);
const recordsVerifier = ref(false);
const projectionUnit = ref(false);
const finalVerification = ref(false);
const recommendingApproval = ref(false);
const surveyApproval = ref(false);
const assignmentofSurveyNo = ref(false);

const sentToEvelynBaloviaGrandToursDate = ref('');
const frontDeskDate = ref('');
const ivasTransactionIDDate = ref('');
const verifiersDate = ref('');
const recordsVerifierDate = ref('');
const projectionUnitDate = ref('');
const finalVerificationDate = ref('');
const recommendingApprovalDate = ref('');
const surveyApprovalDate = ref('');
const assignmentofSurveyNoDate = ref('');

const surveyReturnCheckboxes = [
    ldcOfMotherlotAndPreviousPlan,
    blPlanPrinted,
    blPlanSigned,
    eSurvey,
    fieldNotesFieldNotesCover,
    certifiedCopyOfTaxDeclaration,
    certifiedCopyOfTitle,
    transmittal,
    surveyAuthority,
    geodeticEngineersSignature,
    sentToEvelynBaloviaGrandTours,
    frontDesk,
    ivasTransactionID,
    verifiers,
    recordsVerifier,
    projectionUnit,
    finalVerification,
    recommendingApproval,
    surveyApproval,
    assignmentofSurveyNo
];

//Declaration of Sketch Plan
const printedSP = ref(false);
const releasedSP = ref(false);

const printedSPDate = ref('');
const releasedSPDate = ref('');

const sketchPlanCheckboxes = [
    printedSP,
    releasedSP
];

//Declaration of Topographic Plan
const printedTP = ref(false);
const releasedTP = ref(false);

const printedTPDate = ref('');
const releasedTPDate = ref('');

const topographicPlanCheckboxes = [
    printedTP,
    releasedTP
];

//Declaration of CAAD Application
const filledUpForms = ref(false);
const vicinityMap = ref(false);
const traverseComputations = ref(false);
const officialReceipt = ref(false);
const landTitle = ref(false);
const elevationsDrawings = ref(false);

const sentToCAAPOffice = ref(false);
const approved = ref(false);
const received = ref(false);
const released = ref(false);

const sentToCAAPOfficeDate = ref('');
const approvedDate = ref('');
const receivedDate = ref('');
const releasedDate = ref('');

const caadApplicationCheckboxes = [
    filledUpForms,
    vicinityMap,
    traverseComputations,
    officialReceipt,
    landTitle,
    elevationsDrawings,
    sentToCAAPOffice,
    approved,
    received,
    released
];

const submitform = () => {
    const project = "LOT 5677 - A - 2, PSD - 08 - A";
    // Submit to Firebase
    db.collection(project)
    .doc("Survey_Return")
    .set({
        ldcOfMotherlotAndPreviousPlan: ldcOfMotherlotAndPreviousPlan.value,
        blPlanPrinted: blPlanPrinted.value,
        blPlanSigned: blPlanSigned.value,
        eSurvey: eSurvey.value,
        fieldNotesFieldNotesCover: fieldNotesFieldNotesCover.value,
        certifiedCopyOfTaxDeclaration: certifiedCopyOfTaxDeclaration.value,
        certifiedCopyOfTitle: certifiedCopyOfTitle.value,
        transmittal: transmittal.value,
        surveyAuthority: surveyAuthority.value,
        geodeticEngineersSignature: geodeticEngineersSignature.value,

        sentToEvelynBaloviaGrandTours: sentToEvelynBaloviaGrandTours.value,
        frontDesk: frontDesk.value,
        ivasTransactionID: ivasTransactionID.value,
        verifiers: verifiers.value,
        recordsVerifier: recordsVerifier.value,
        projectionUnit: projectionUnit.value,
        finalVerification: finalVerification.value,
        recommendingApproval: recommendingApproval.value,
        surveyApproval: surveyApproval.value,
        assignmentofSurveyNo: assignmentofSurveyNo.value,

        sentToEvelynBaloviaGrandToursDate: sentToEvelynBaloviaGrandToursDate.value,
        frontDeskDate: frontDeskDate.value,
        ivasTransactionIDDate: ivasTransactionIDDate.value,
        verifiersDate: verifiersDate.value,
        recordsVerifierDate: recordsVerifierDate.value,
        projectionUnitDate: projectionUnitDate.value,
        finalVerificationDate: finalVerificationDate.value,
        recommendingApprovalDate: recommendingApprovalDate.value,
        surveyApprovalDate: surveyApprovalDate.value,
        assignmentofSurveyNoDate: assignmentofSurveyNoDate.value,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    db.collection(project)
    .doc("Sketch_Plan")
    .set({
        printedSP: printedSP.value,
        releasedSP: releasedSP.value,

        printedSPDate: printedSPDate.value,
        releasedSPDate: releasedSPDate.value,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    db.collection(project)
    .doc("Topographic_Plan")
    .set({
        printedTP: printedTP.value,
        releasedTP: releasedTP.value,

        printedTPDate: printedTPDate.value,
        releasedTPDate: releasedTPDate.value,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    db.collection(project)
    .doc("CAAD_Application")
    .set({
        filledUpForms: filledUpForms.value,
        vicinityMap: vicinityMap.value,
        traverseComputations: traverseComputations.value,
        officialReceipt: officialReceipt.value,
        landTitle: landTitle.value,
        elevationsDrawings: elevationsDrawings.value,

        sentToCAAPOffice: sentToCAAPOffice.value,
        approved: approved.value,
        received: received.value,
        released: released.value,

        sentToCAAPOfficeDate: sentToCAAPOfficeDate.value,
        approvedDate: approvedDate.value,
        receivedDate: receivedDate.value,
        releasedDate: releasedDate.value,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    db.collection(project)
    .doc("Toggles_Percentage")
    .set({
        surveyReturnToggle: surveyReturnToggle.value,
        sketchPlanToggle: sketchPlanToggle.value,
        topographicPlanToggle: topographicPlanToggle.value,
        caadApplicationToggle: caadApplicationToggle.value,
        surveyProgressPercentage: surveyProgressPercentage.value,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
};

const initializeComponent = async () =>{
    try {
    const Survey_Return = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('Survey_Return');
    const docSnapshotSR = await getDoc(Survey_Return);

    const Sketch_Plan = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('Sketch_Plan');
    const docSnapshotSP = await getDoc(Sketch_Plan);

    const Topographic_Plan = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('Topographic_Plan');
    const docSnapshotTP = await getDoc(Topographic_Plan);

    const CAAD_Application = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('CAAD_Application');
    const docSnapshotCA = await getDoc(CAAD_Application);

    const Toggles_Percentage = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('Toggles_Percentage');
    const docSnapshotTogPer = await getDoc(Toggles_Percentage);

    if (docSnapshotSR.exists()) {   
        const data = docSnapshotSR.data();
        ldcOfMotherlotAndPreviousPlan.value = Boolean(data.ldcOfMotherlotAndPreviousPlan);
        blPlanPrinted.value = Boolean(data.blPlanPrinted);
        blPlanSigned.value = Boolean(data.blPlanSigned);
        eSurvey.value = Boolean(data.eSurvey);
        fieldNotesFieldNotesCover.value = Boolean(data.fieldNotesFieldNotesCover);
        certifiedCopyOfTaxDeclaration.value = Boolean(data.certifiedCopyOfTaxDeclaration);
        certifiedCopyOfTitle.value = Boolean(data.certifiedCopyOfTitle);
        transmittal.value = Boolean(data.transmittal);
        surveyAuthority.value = Boolean(data.surveyAuthority);
        geodeticEngineersSignature.value = Boolean(data.geodeticEngineersSignature);

        sentToEvelynBaloviaGrandTours.value = Boolean(data.sentToEvelynBaloviaGrandTours);
        frontDesk.value = Boolean(data.frontDesk);
        ivasTransactionID.value = Boolean(data.ivasTransactionID);
        verifiers.value = Boolean(data.verifiers);
        recordsVerifier.value = Boolean(data.recordsVerifier);
        projectionUnit.value = Boolean(data.projectionUnit);
        finalVerification.value = Boolean(data.finalVerification);
        recommendingApproval.value = Boolean(data.recommendingApproval);
        surveyApproval.value = Boolean(data.surveyApproval);
        assignmentofSurveyNo.value = Boolean(data.assignmentofSurveyNo);

        sentToEvelynBaloviaGrandToursDate.value = data.sentToEvelynBaloviaGrandToursDate;
        frontDeskDate.value = data.frontDeskDate;
        ivasTransactionIDDate.value = data.ivasTransactionIDDate;
        verifiersDate.value = data.verifiersDate;
        recordsVerifierDate.value = data.recordsVerifierDate;
        projectionUnitDate.value = data.projectionUnitDate;
        finalVerificationDate.value = data.finalVerificationDate;
        recommendingApprovalDate.value = data.recommendingApprovalDate;
        surveyApprovalDate.value = data.surveyApprovalDate;
        assignmentofSurveyNoDate.value = data.assignmentofSurveyNoDate;
    } else {
        // Document does not exist
        console.log('Document does not exist.');
    }

    if (docSnapshotSP.exists()) {
        const data = docSnapshotSP.data();
        printedSP.value = Boolean(data.printedSP);
        releasedSP.value = Boolean(data.releasedSP);

        printedSPDate.value = data.printedSPDate;
        releasedSPDate.value = data.releasedSPDate;
    } else {
        // Document does not exist
        console.log('Document does not exist.');
    }

    if (docSnapshotTP.exists()) {
        const data = docSnapshotTP.data();
        printedTP.value = Boolean(data.printedTP);
        releasedTP.value = Boolean(data.releasedTP);

        printedTPDate.value = data.printedTPDate;
        releasedTPDate.value = data.releasedTPDate;
    } else {
        // Document does not exist
        console.log('Document does not exist.');
    }

    if (docSnapshotCA.exists()) {
        const data = docSnapshotCA.data();
        filledUpForms.value = Boolean(data.filledUpForms);
        vicinityMap.value = Boolean(data.vicinityMap);
        traverseComputations.value = Boolean(data.traverseComputations);
        officialReceipt.value = Boolean(data.officialReceipt);
        landTitle.value = Boolean(data.landTitle);
        elevationsDrawings.value = Boolean(data.elevationsDrawings);

        sentToCAAPOffice.value = Boolean(data.sentToCAAPOffice);
        approved.value = Boolean(data.approved);
        received.value = Boolean(data.received);
        released.value = Boolean(data.released);

        sentToCAAPOfficeDate.value = data.sentToCAAPOfficeDate;
        approvedDate.value = data.approvedDate;
        receivedDate.value = data.receivedDate;
        releasedDate.value = data.releasedDate;
    } else {
        // Document does not exist
        console.log('Document does not exist.');
    }

    if (docSnapshotTogPer.exists()) {
        const data = docSnapshotTogPer.data();
        surveyReturnToggle.value = Boolean(data.surveyReturnToggle);
        sketchPlanToggle.value = Boolean(data.sketchPlanToggle);
        topographicPlanToggle.value = Boolean(data.topographicPlanToggle);
        caadApplicationToggle.value = Boolean(data.caadApplicationToggle);

        surveyProgressPercentage.value = data.surveyProgressPercentage;
    } else {
        // Document does not exist
        console.log('Document does not exist.');
    }

  } catch (error) {
    console.error('Error fetching document:', error);
  }

}

onMounted(initializeComponent);

const route = useRoute();
const router = useRouter();

const activeComponent = computed(() => {
    return route.meta.activeComponent;
});

const progressPercentage = computed(() => {
    let ctr = 0;
    let surveyReturnPercentage = 0;
    let sketchPlanPercentage = 0;
    let topographicPlanPercentage = 0;
    let caadApplicationPercentage = 0;

    if (surveyReturnToggle.value) {
        const totalCheckboxes = surveyReturnCheckboxes.length;
        const checkedCount = surveyReturnCheckboxes.filter(checkbox  => checkbox .value).length;
        surveyReturnPercentage = Math.floor((checkedCount / totalCheckboxes) * 100);
        ctr++;
    }
    if (sketchPlanToggle.value) {
        const totalCheckboxes = sketchPlanCheckboxes.length;
        const checkedCount = sketchPlanCheckboxes.filter(checkbox  => checkbox .value).length;
        sketchPlanPercentage = Math.floor((checkedCount / totalCheckboxes) * 100);
        ctr++;
    }
    if (topographicPlanToggle.value) {
        const totalCheckboxes = topographicPlanCheckboxes.length;
        const checkedCount = topographicPlanCheckboxes.filter(checkbox  => checkbox .value).length;
        topographicPlanPercentage = Math.floor((checkedCount / totalCheckboxes) * 100);
        ctr++;
    }
    if (caadApplicationToggle.value) {
        const totalCheckboxes = caadApplicationCheckboxes.length;
        const checkedCount = caadApplicationCheckboxes.filter(checkbox  => checkbox .value).length;
        caadApplicationPercentage = Math.floor((checkedCount / totalCheckboxes) * 100);
        ctr++;
    }

    if (ctr > 0) {
        const totalPercentage = surveyReturnPercentage + sketchPlanPercentage + topographicPlanPercentage + caadApplicationPercentage;
        const averagePercentage = totalPercentage / ctr;
        surveyProgressPercentage.value = averagePercentage;
        return Math.floor(surveyProgressPercentage.value);
    }
    surveyProgressPercentage.value = 0;
    return 0;
});

const redirectTosurveydetails = () => {
    router.push('/surveydetails');
};

const redirectTopaymentprogress = () => {
    router.push('/paymentprogress');
};

const updateValue = async () => {
    submitform();
    alert('Update successful!');
    await initializeComponent();
}
</script>

<template>
    <div class="header">
        <div class="title">
            <span>Survey Progress</span>
        </div>
    </div>
    <div class="container">
        <div class="tabs">
            <div class="panel-tab" :class="{ active: activeComponent === 'surveydetails' }" @click="redirectTosurveydetails">
                <span class = "tab-text" :class="{ active: activeComponent === 'surveydetails' }" @click="redirectTosurveydetails">
                    Survey Details
                </span>
            </div>
            <div class="panel-tab" :class="{ active: activeComponent === 'surveyprogress' }">
                <span class = "tab-text" :class="{ active: activeComponent === 'surveyprogress' }">
                    Survey Progress
                </span>
            </div>
            <div class="panel-tab" :class="{ active: activeComponent === 'paymentprogress' }" @click="redirectTopaymentprogress">
                <span class = "tab-text" :class="{ active: activeComponent === 'paymentprogress' }" @click="redirectTopaymentprogress">
                    Payment Progress
                </span>
            </div>
        </div>
        <div class="main-panel">
            <div class="progress-bar-panel">
                <div class="progress-bar-indicator">
                    <span class="percentage">{{ progressPercentage }}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-blue-bar">
                        <div class="progress-white-bar" :style="{ width: progressPercentage + '%' }"></div>
                    </div>
                </div>
            </div>
            <div class="progress-popup-message">
                <div class="message-box" id="survey-return-completed">
                    <span>Survey Return Completed</span>
                </div>
                <div class="message-box" id="survey-return-submitted">
                    <span>Survey Return Submitted</span>
                </div>
                <div class="message-box" id="sketch-plan-completed">
                    <span>Sketch Plan Completed</span>
                </div>
                <div class="message-box" id="topographic-plan-completed">
                    <span>Topographic Plan Completed</span>
                </div>
                <div class="message-box" id="caad-application-completed">
                    <span>CAAD Application Completed</span>
                </div>
            </div>
            <div class="survey-return-panel">
                <div class="panel-titles" :class="{ 'off': !surveyReturnToggle }">
                    <span>Survey Return</span>
                    <div class="toggle-switch">
                        <label class="switch">
                            <input type="checkbox" v-model="surveyReturnToggle">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div class="panel-tables">
                    <table class="left-table">
                        <tr>
                            <th class="table-titles">Survey Return and Requirements</th>
                            <th class="table-titles">Completed</th>
                        </tr>
                        <tr>
                            <th class="SR-names">LDC of Motherlot and Previous Plan</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="ldcOfMotherlotAndPreviousPlan" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">BL Plan Printed</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="blPlanPrinted" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">BL Plan Signed</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="blPlanSigned" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">E-Survey</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="eSurvey" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Field Notes & Field Notes Cover</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="fieldNotesFieldNotesCover" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Certified Copy of Tax Declaration</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="certifiedCopyOfTaxDeclaration" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Certified Copy of Title</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="certifiedCopyOfTitle" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Transmittal</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="transmittal" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Survey Authority</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyAuthority" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Geodetic Engineer's Signature</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="geodeticEngineersSignature" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                    </table>
                    <table class="right-table">
                        <tr>
                            <th class="table-titles">Submittal and Updates</th>
                            <th class="table-titles">Completed</th>
                            <th class="table-titles">Date</th>
                        </tr>
                        <tr>
                            <th class="SR-names">Sent to Evelyn Balo via GrandTours</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="sentToEvelynBaloviaGrandTours" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="sentToEvelynBaloviaGrandToursDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Front Desk</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="frontDesk" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="frontDeskDate" :disabled="!surveyReturnToggle"></th>   
                        </tr>
                        <tr>
                            <th class="SR-names">Ivas Transaction ID</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="ivasTransactionID" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="ivasTransactionIDDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Verifiers</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="verifiers" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="verifiersDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Records Verifier</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="recordsVerifier" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="recordsVerifierDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Projection Unit</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="projectionUnit" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="projectionUnitDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Final Verification</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="finalVerification" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="finalVerificationDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Recommending Approval</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="recommendingApproval" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="recommendingApprovalDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Survey Approval</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyApproval" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="surveyApprovalDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Assignment of Survey No.</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="assignmentofSurveyNo" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="text" v-model="assignmentofSurveyNoDate" :disabled="!surveyReturnToggle"></th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="sketch-topographic-panel">
                <div class="sketch-plan-panel">
                    <div class="panel-titles" :class="{ 'off': !sketchPlanToggle }">
                        <span>Sketch Plan</span>
                        <div class="toggle-switch">
                        <label class="switch">
                            <input type="checkbox" v-model="sketchPlanToggle">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    </div>
                    <div>
                        <table class="sketch-plan-table">
                            <tr>
                                <th></th>
                                <th class="table-titles">Completed</th>
                                <th class="table-titles">Date</th>
                            </tr>
                            <tr>
                                <th class="SR-names">Printed</th>
                                <th>
                                    <label class="check-box">
                                        <input type="checkbox" v-model="printedSP" :disabled="!sketchPlanToggle">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th><input class="table-date" type="date" v-model="printedSPDate" :disabled="!sketchPlanToggle"></th>
                            </tr>
                            <tr>
                                <th class="SR-names">Released</th>
                                <th>
                                    <label class="check-box">
                                        <input type="checkbox" v-model="releasedSP" :disabled="!sketchPlanToggle"> 
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th><input class="table-date" type="date" v-model="releasedSPDate" :disabled="!sketchPlanToggle"></th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="topographic-plan-panel">
                    <div class="panel-titles" :class="{ 'off': !topographicPlanToggle }">
                        <span>Topographic Plan</span>
                        <div class="toggle-switch">
                        <label class="switch">
                            <input type="checkbox" v-model="topographicPlanToggle">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    </div>
                    <table class="sketch-plan-table">
                        <tr>
                            <th></th>
                            <th class="table-titles">Completed</th>
                            <th class="table-titles">Date</th>
                        </tr>
                        <tr>
                            <th class="SR-names">Printed</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="printedTP" :disabled="!topographicPlanToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="printedTPDate" :disabled="!topographicPlanToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Released</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="releasedTP" :disabled="!topographicPlanToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="releasedTPDate" :disabled="!topographicPlanToggle"></th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="survey-return-panel">
                <div class="panel-titles" :class="{ 'off': !caadApplicationToggle }">
                    <span>CAAD Application</span>
                    <div class="toggle-switch">
                        <label class="switch">
                            <input type="checkbox" v-model="caadApplicationToggle">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div class="panel-tables">
                    <table class="left-table">
                        <tr>
                            <th class="table-titles">Requirements</th>
                            <th class="table-titles">Completed</th>
                        </tr>
                        <tr>
                            <th class="SR-names">Filled-Up Forms</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="filledUpForms" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Vicinity Map</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="vicinityMap" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Traverse Computations</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="traverseComputations" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Official Receipt</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="officialReceipt" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Land Title</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="landTitle" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Elevations Drawings</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="elevationsDrawings" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                    </table>
                    <table class="right-table">
                        <tr>
                            <th class="table-titles">Submittal and Updates</th>
                            <th class="table-titles">Completed</th>
                            <th class="table-titles">Date</th>
                        </tr>
                        <tr>
                            <th class="SR-names">Sent to CAAP Office</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="sentToCAAPOffice" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="sentToCAAPOfficeDate" :disabled="!caadApplicationToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Approved</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="approved" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="approvedDate" :disabled="!caadApplicationToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Received</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="received" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="receivedDate" :disabled="!caadApplicationToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Released</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="released" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" v-model="releasedDate" :disabled="!caadApplicationToggle"></th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="buttons-panel">
                <button class="updateBtn" @click="updateValue()">Update</button>
            </div>
        </div>    
    </div>
</template>
<style scoped >
body{
    background-color: #F4F4F4;
}
.header{
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-left: 40px;
    padding-right: 20px;
    color: #007BFF;
    background-color: white;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    height: 80px;
}

.title{
    margin: auto;
    margin-left: 0px;
}

.title span{
    font-weight: bold;
    font-size: 30px;
}

.container{
    display: flex;
    align-items: center;
    color: black;
    padding: 40px;
    flex-direction: column;
}
    
.tabs{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.tab-text{
    text-align: center ;
    color: #F4F4F4;
}

.panel-tab{
    width: auto;
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-items: center;
    padding: 0 30px;
    background-color: #343A40;
    cursor: pointer;
}

.panel-tab:hover{
    background-color: #007BFF;
    transition: .3s;
}

.panel-tab.active{
    background-color:#007BFF;
    cursor: pointer;
}

.main-panel{
    background-color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.progress-bar-panel{
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: 50px;
    padding: 0 40px;
    margin-bottom: 5px;
}

.progress-bar-indicator{
    background-color: #007BFF;
    color: white;
    border-radius: 5px 0 0 5px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 100%;
}

.progress-bar{
    background-color:#343A40;
    height: 100%;
    width: 100%;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.progress-white-bar{
    background-color:white;
    height: 23px;
    border-radius: 20px;
    width: 40%;
    transition: 1s;
}
.progress-blue-bar{
    background-color:rgba(255, 255, 255, 0.402);
    height: 23px;
    border-radius: 20px;
    width: 100%;
}

.survey-return-panel{
    margin-top: 5px;
    margin-bottom: 5px;
}

.panel-titles{
    display: flex;
    align-items: center;
    background-color: #007BFF;
    color: white;
    justify-content: center;
    width: 100%;
    height: 35px;
    border-radius: 3px;
    margin-bottom: 5px;
    padding-left: 42px;
    padding-right: 8px;
}

.panel-titles span{
    flex: 1;
    display: flex;
    justify-content: center;
}

.panel-tables{
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
}

.left-table, .right-table, .sketch-plan-table, .topographic-plan-table{
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.left-table{
    margin-right: .5%;
    width: 40%;
}

.right-table{
    margin-left: .5%;
    width: 60%;
}

.SR-names{
    text-align: left;
    padding-left: 10px;
}
.left-table th, .left-table td, 
.right-table th, .right-table td,
.sketch-plan-table th, .sketch-plan-table td,
.topographic-plan-table th, .topographic-plan-table td{
    padding: 2px 16px;
}

.left-table tr:nth-child(even), 
.right-table tr:nth-child(even),
.sketch-plan-table tr:nth-child(even),
.topographic-plan-table tr:nth-child(even){
    background-color: #dddddd;
}

.table-titles{
    font-weight: bold;
    font-size: 16px;
    color: #343A40;
}

.progress-popup-message{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
}

.message-box{
    background-color: #343A40;
    color: white;
    margin: 5px 10px;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 14px;
    border-radius:10px;
    padding: 10px;
}

#survey-return-completed,
#survey-return-submitted,
#sketch-plan-completed,
#topographic-plan-completed,
#caad-application-completed{
    display: none;
}

.sketch-topographic-panel{
    margin: 5px 0;
    display: flex;
    align-items: top;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.sketch-plan-panel{
    width: 50%;
    margin-right: .5%;
}

.topographic-plan-panel{
    width: 50%;
    margin-left: .5%;
}

.sketch-plan-table, .topograhpic-plan-table{
    width: 100%;
}

.table-date{
    border: none;
    background-color: rgba(255, 255, 255, 0);
    font-size: 15px;
    text-align: center;
}

.caap-application-panel{
    margin-top: 5px;
}

.toggle-switch{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
}

.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: rgba(255, 255, 255, 0.100) ;
 
}

input:focus + .slider {
     box-shadow: 0 0 1px  rgba(255, 255, 255, 0.100) ;
}

input:checked + .slider:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.panel-titles.off {
  background-color:#007bffa4;
}

.buttons-panel{
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 10px;
}
.updateBtn{
    /* display: none; */
    margin-left: 10px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color:#007BFF;
    color: white;
}

.updateBtn:hover{
    background-color: #007bffcf;
    transition: .3s;
}
</style>