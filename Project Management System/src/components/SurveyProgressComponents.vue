<script>
export default {
    data() { 
        return {
            surveyReturnToggle: true,
            sketchPlanToggle: true,
            topographicPlanToggle: true,
            caadApplicationToggle: true,
            surveyReturnCheckboxes: {
                //Survey Return and Requirements
                ldcOfMotherlot: false,
                blPlanPrinted: false,
                blPlanSigned: false,
                eSurvey: false,
                fieldNotesFieldNotesCover: false,
                certifiedCopyOfTaxDeclaration: false,
                certifiedCopyOfTitle: false,
                transmittal: false,
                surveyAuthority: false,
                geodeticEngineerSignature: false,
                //Submittal and Updates
                sentToEvelynBaloviaGrandTours: false,		
                frontDesk: false,		
                ivasTransactionID: false,		
                verifiers: false,		
                recordsVerifier: false,		
                projectionUnit: false,		
                finalVerification: false,		
                recommendingApproval: false,		
                surveyApproval: false,		
                assignmentofSurveyNo: false,
            },
            sketchPlanCheckboxes: {
                //Sketch Plan
                printedSP: false,
                releasedSP: false,
            },
            topographicPlanCheckboxes: {
                //Topographic Plan
                printedTP: false,
                releasedTP: false,
            },
            caadApplicationCheckboxes: {
                //CAAD Application Requirements
                filledUpForms: false,	
                vicinityMap: false,	
                traverseComputations: false,	
                officialReceipt: false,	
                landTitle: false,	
                elevationsDrawings: false,
                //CAAD Application Submittal and Updates
                sentToCAAPOffice: false,
                approved: false,
                received: false,
                released: false
            }
        };
    },
    watch: {
        /*
        surveyReturnToggle(newVal) {
            for (const key in this.surveyReturnCheckboxes) {
            this.surveyReturnCheckboxes[key] = newVal;
            }
        },
        sketchPlanToggle(newVal) {
            for (const key in this.sketchPlanCheckboxes) {
            this.sketchPlanCheckboxes[key] = newVal;
            }
        },*/
    },
    computed: {
        activeComponent() {
            return this.$route.meta.activeComponent;
        },
        progressPercentage() {
            let ctr = 0;
            let surveyReturnPercentage = 0;
            let sketchPlanPercentage = 0;
            let topographicPlanPercentage = 0;
            let caadApplicationPercentage = 0;
            if(this.surveyReturnToggle) {
                const totalCheckboxes = Object.keys(this.surveyReturnCheckboxes).length;
                const checkedCheckboxes = Object.values(this.surveyReturnCheckboxes).filter((value) => value).length;
                surveyReturnPercentage = ((checkedCheckboxes / totalCheckboxes) * 100);
                ctr++;
            }
            if(this.sketchPlanToggle) {
                const totalCheckboxes = Object.keys(this.sketchPlanCheckboxes).length;
                const checkedCheckboxes = Object.values(this.sketchPlanCheckboxes).filter((value) => value).length;
                sketchPlanPercentage = ((checkedCheckboxes / totalCheckboxes) * 100);
                ctr++;
            }
            if(this.topographicPlanToggle) {
                const totalCheckboxes = Object.keys(this.topographicPlanCheckboxes).length;
                const checkedCheckboxes = Object.values(this.topographicPlanCheckboxes).filter((value) => value).length;
                topographicPlanPercentage =((checkedCheckboxes / totalCheckboxes) * 100);
                ctr++;
            }
            if(this.caadApplicationToggle) {
                const totalCheckboxes = Object.keys(this.caadApplicationCheckboxes).length;
                const checkedCheckboxes = Object.values(this.caadApplicationCheckboxes).filter((value) => value).length;
                caadApplicationPercentage = ((checkedCheckboxes / totalCheckboxes) * 100);
                ctr++;
            }
            if (ctr > 0) {
                const totalPercentage = surveyReturnPercentage + sketchPlanPercentage + topographicPlanPercentage + caadApplicationPercentage;
                const averagePercentage = totalPercentage / ctr;
                //return averagePercentage.toFixed(2);
                return Math.round(averagePercentage);
            }
            return 0;
        },
    },
    methods: {
        redirectTosurveydetails() {
            this.$router.push('/surveydetails')
        },
        redirectTosurveyprogress() {
            this.$router.push('/surveyprogress')
        },
        redirectTopaymentprogress() {
            this.$router.push('paymentprogress')
        }
    }
};
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
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.ldcOfMotherlot" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">BL Plan Printed</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.blPlanPrinted" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">BL Plan Signed</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.blPlanSigned" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">E-Survey</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.eSurvey" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Field Notes & Field Notes Cover</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.fieldNotesFieldNotesCover" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Certified Copy of Tax Declaration</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.certifiedCopyOfTaxDeclaration" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Certified Copy of Title</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.certifiedCopyOfTitle" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Transmittal</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.transmittal" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Survey Authority</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.surveyAuthority" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Geodetic Engineer's Signature</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.geodeticEngineerSignature" :disabled="!surveyReturnToggle">
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
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.sentToEvelynBaloviaGrandTours" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Front Desk</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.frontDesk" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Ivas Transaction ID</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.ivasTransactionID" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Verifiers</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.verifiers" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Records Verifier</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.recordsVerifier" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Projection Unit</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.projectionUnit" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Final Verification</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.finalVerification" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Recommending Approval</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.recommendingApproval" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Survey Approval</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.surveyApproval" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!surveyReturnToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Assignment of Survey No.</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="surveyReturnCheckboxes.assignmentofSurveyNo" :disabled="!surveyReturnToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="text" :disabled="!surveyReturnToggle"></th>
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
                                        <input type="checkbox" v-model="sketchPlanCheckboxes.printedSP" :disabled="!sketchPlanToggle">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th><input class="table-date" type="date" :disabled="!sketchPlanToggle"></th>
                            </tr>
                            <tr>
                                <th class="SR-names">Released</th>
                                <th>
                                    <label class="check-box">
                                        <input type="checkbox" v-model="sketchPlanCheckboxes.releasedSP" :disabled="!sketchPlanToggle"> 
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th><input class="table-date" type="date" :disabled="!sketchPlanToggle"></th>
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
                                    <input type="checkbox" v-model="topographicPlanCheckboxes.printedTP" :disabled="!topographicPlanToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!topographicPlanToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Released</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="topographicPlanCheckboxes.releasedTP" :disabled="!topographicPlanToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!topographicPlanToggle"></th>
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
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.filledUpForms" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Vicinity Map</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.vicinityMap" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Traverse Computations</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.traverseComputations" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Official Receipt</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.officialReceipt" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Land Title</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.landTitle" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Elevations Drawings</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.elevationsDrawings" :disabled="!caadApplicationToggle">
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
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.sentToCAAPOffice" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!caadApplicationToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Approved</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.approved" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!caadApplicationToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Received</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.received" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!caadApplicationToggle"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Released</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox" v-model="caadApplicationCheckboxes.released" :disabled="!caadApplicationToggle">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date" :disabled="!caadApplicationToggle"></th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>    
    </div>
</template>
<style>
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

</style>