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
        }
    }
};
</script>
<template>
    <div class="header">
        <div class="title">
            <span>LOT 5677 - A - 2 , PSD - 08 - D</span>
        </div>
    </div>
    <div class="container">
        <div class="tabs">
            <div class="panel-tab" :class="{ active: activeComponent === 'surveydetails' }" @click="redirectTosurveydetails">
                <span class = "tab-text" :class="{ active: activeComponent === 'surveydetails' }" @click="redirectTosurveydetails">
                    Survey Details
                </span>
            </div>
            <div class="panel-tab" :class="{ active: activeComponent === 'surveyprogress' }" @click="redirectTosurveyprogress">
                <span class = "tab-text" :class="{ active: activeComponent === 'surveyprogress' }" @click="redirectTosurveyprogress">
                    Survey Progress
                </span>
            </div>
            <div class="panel-tab" :class="{ active: activeComponent === 'paymentprogress' }">
                <span class = "tab-text" :class="{ active: activeComponent === 'paymentprogress' }">
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
</style>