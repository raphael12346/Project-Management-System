<script>
export default {
    methods: {
        redirectTosurveydetails() {
        this.$router.push('/surveydetails')
        },
    },
    
    data() {
        return {
            createNewSurvey: false
        }
    }
}
</script>
<template>
    <div class="header">
        <div class="title">
            <span>All Surveys</span>
        </div>
        <div class="right-panel">
            <div class="createBtn">
                <button class="create-button" @click="createNewSurvey = !createNewSurvey"> 
                Create a New Survey
                </button>
            </div>
            <div class="search-container">
                <input type="search" placeholder="Search..." name="search">
                <button type="submit">
                    <span id="search-icon" class="material-symbols-rounded">
                        search
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="container">
        <table class="all-survey-table">
            <tr>
                <th class="table-titles">Lot & Survey No.</th>
                <th class="table-titles">Client</th>
                <th class="table-titles">Property Location</th>
                <th class="table-titles">Total Amount</th>
                <th class="table-titles">Status</th>
                <th class="table-titles">Action</th>
            </tr>
            <tr>
                <th>LOT 5677 - A - 2 , PSD - 08 - D</th>
                <th>Raphael S. Orillano</th>
                <th>Brgy. Airport, Ormoc City</th>
                <th>₱20,000.00</th>
                <th>Ongoing</th>
                <th>
                    <div class="actions">
                        <button class="openBtn" @click="redirectTosurveydetails">
                            Open
                        </button>
                        <button class="deleteBtn">
                            <span id="delete-icon" class="material-symbols-rounded">
                                delete
                            </span>
                        </button>
                    </div>
                </th>
            </tr>
            <tr>
                <th>LOT 6001 - A - 2 , PSD - 08 - D</th>
                <th>Kyle Nierras</th>
                <th>Brgy. Salvacion, Ormoc City</th>
                <th>₱36,000.00</th>
                <th>Completed</th>
                <th>
                    <div class="actions">
                        <button class="openBtn" @click="redirectTosurveydetails">
                            Open
                        </button>
                        <button class="deleteBtn">
                            <span id="delete-icon" class="material-symbols-rounded">
                                delete
                            </span>
                        </button>
                    </div>
                </th>
            </tr>
        </table>
    </div>
    <div class="add-container" v-show="createNewSurvey">
        <div class="form">
            <form>
                <div class="surveyinformationpanel">
                    <div class="surveyinformationtitle">
                        <span>Survey Information</span>
                    </div>
                    <div class="surveyinformationsubpanel-top">
                        <div class="surveyinformationsubpanel-left">
                            <div class="surveyinformationsubpanels">
                                <span>Transaction Date</span>
                                <input type="date" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Schedule of Survey</span>
                                <input type="date" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Claimant</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Type of Survey</span>
                                <input type="text" required/>
                                
                            </div>
                        </div>
                        <div class="surveyinformationsubpanel-right">
                            <div class="surveyinformationsubpanels">
                                <span>Province</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Municipality</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Barangay</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Area</span>
                                <input type="text" required/>
                            </div>
                        </div>
                    </div>
                    <div class="surveyinformationsubpanel-bottom">
                        <div class="surveyinformationsubpanels">
                                <span>Lot & Survey No.</span>
                                <input type="text" required/>
                            </div>
                    </div>
                </div>
                <div class="clientdetailspanel">
                    <div class="surveyinformationtitle">
                        <span>Client Details</span>
                    </div>
                    <div class="surveyinformationsubpanel-top">
                        <div class="surveyinformationsubpanel-left">
                            <div class="surveyinformationsubpanels">
                                <span>Name</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Relation to Claimant</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Address</span>
                                <input type="text" required/>
                            </div>
                        </div>
                        <div class="surveyinformationsubpanel-right">
                            <div class="surveyinformationsubpanels">
                                <span>Mobile No.</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Email Adress</span>
                                <input type="text" required/>
                            </div>
                            <div class="surveyinformationsubpanels">
                                <span>Messenger</span>
                                <input type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-buttons">
                    <button class="form-cancelBtn" @click="createNewSurvey = !createNewSurvey">Cancel</button>
                    <button type="submit" class="form-addSurveyBtn">Add Survey</button>
                </div>
            </form>
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

.right-panel{
    display: flex;
    align-items: center;
    flex-direction: row;
}

.search-container{
    display: flex;
    align-items: center;
    flex-direction: row;
}

.createBtn button{
    height: 36px;
    background-color: #2EA54C;
    color: white;
    border: none;
    margin-right: 10px;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
}

.createBtn button:hover{
    background-color: #2ea54ce3;
}

#addbox-icon{
    font-size: 20px;
}

.search-container input{
    height: 36px;
    padding-left: 10px;
    border: 1px solid #DDDDDD;
    border-radius: 3px 0 0 3px;
    border-right: 0px;
    font-size: 14px;
}
.search-container button{
    height: 36px;
    width: 36px;
    border: none;
    border-radius: 0 3px 3px 0;
    background-color: #343A40;
    color: white;
    padding: 0px;
}

.search-container button:hover{
    color: white;
    background-color: #343a40dd;
    cursor: pointer;
}

#search-icon{
    font-size: 26px;
    margin: 5px;
}

.container{
    display: flex;
    align-items: center;
    color: black;
    padding: 40px;
}

.all-survey-table{
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.all-survey-table th, .all-survey-table td {
    text-align: left;
    padding: 16px;
}

.all-survey-table tr:nth-child(even) {
    background-color: #dddddd;
}

.table-titles{
    font-weight: bold;
}

.actions{
    display: flex;
    align-items: center;
    flex-direction: row;
}

.openBtn{
    border: none;
    height: 30px;
    padding: 0 10px;
    margin-right: 10px;
    background-color: #2ea54c;
    cursor: pointer;
    color: white;
}

.openBtn:hover{
    background-color: #2ea54ce3;
}

.deleteBtn{
    height: 30px;
    border: none;
    background-color: #EE4035;
    padding: 5px;
    cursor: pointer;
}

.deleteBtn:hover{
    background-color: #ee4135b8;
}

#delete-icon{
    font-size: 20px;
}

.add-container{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.595);
    height: 100%;
    width: 100%; 
    top: 0;
    right: 0; 
    display: flex;
    align-items: center;
    justify-content: center;  
    transition: opacity 2s;
}

.form{
    background-color: white;
    width: 60%;
    height: auto;
    padding: 30px;
}

.surveyinformationtitle{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0;
}

.surveyinformationtitle span{
    background-color: #007BFF;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    border-radius: 3px;
}

.surveyinformationsubpanel-top{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.surveyinformationsubpanel-left{
    width: 50%;
    margin-right: .5%;
}

.surveyinformationsubpanel-right{
    width: 50%;
    margin-left: .5%;
}

.surveyinformationsubpanels{
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: center;
    padding: 2px 0;
}

.surveyinformationsubpanels span{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px var(--border) solid;
    background-color: var(--grey);
    color: black;
    padding: 0 10px;
    border-radius: 3px 0 0 3px;
    height: 30px;
    border-right: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.surveyinformationsubpanels input{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px var(--border) solid;
    height: 100%;
    border-radius: 0 3px 3px 0;
    padding-left: 10px;
    padding-right: 5px;
}

.form-buttons{
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 10px;
}

.form-cancelBtn, .form-addSurveyBtn{
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: white;
    padding: 0 10px;
    cursor: pointer;
}

.form-cancelBtn{
    background-color: #EE4035;
    margin-right: 5px;
}

.form-addSurveyBtn{
    background-color: #007BFF;
    margin-left: 5px;
}

</style>
