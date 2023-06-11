<script>
export default {
  computed: {
    activeComponent() {
        return this.$route.meta.activeComponent;
    },
    progressPercentage() {
      // Calculate the progress percentage based on your data
        return 10;
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
            <div class="panel-tab">
                <span class = "tab-text">
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
                <div class="panel-titles">
                    <span>Survey Return</span>
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
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">BL Plan Printed</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">BL Plan Signed</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">E-Survey</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Field Notes & Field Notes Cover</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Certified Copy of Tax Declaration</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Certified Copy of Title</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Transmittal</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Survey Authority</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th class="SR-names">Geodetic Engineer's Signature</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
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
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Front Desk</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Ivas Transaction ID</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Verifiers</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Records Verifier</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Projection Unit</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Final Verification</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Recommending Approval</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Survey Approval</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Assignment of Survey No.</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="text"></th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="sketch-topographic-panel">
                <div class="sketch-plan-panel">
                    <div class="panel-titles">
                        <span>Sketch Plan</span>
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
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th><input class="table-date" type="date"></th>
                            </tr>
                            <tr>
                                <th class="SR-names">Released</th>
                                <th>
                                    <label class="check-box">
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th><input class="table-date" type="date"></th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="topographic-plan-panel">
                    <div class="panel-titles">
                        <span>Topographic Plan</span>
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
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                        <tr>
                            <th class="SR-names">Released</th>
                            <th>
                                <label class="check-box">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </th>
                            <th><input class="table-date" type="date"></th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="caap-application-panel">
                <div class="panel-titles">
                    <span>CAAD Application</span>
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
    background-color: #007BFF;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 3px;
    height: 35px;
    margin-bottom: 5px;
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
</style>