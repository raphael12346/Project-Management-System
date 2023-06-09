<script>
export default {
    data() {
    return {
      name: "Emmanuel G. Orillano",
      readOnly: true,
      originalName: "Emmanuel G. Orillano" // Add this data property
    };
},
computed: {
    activeComponent() {
      return this.$route.meta.activeComponent;
    },
},
methods: {
    redirectTosurveydetails() {
      this.$router.push('/surveydetails')
    },
    redirectTosurveyprogress() {
      this.$router.push('/surveyprogress')
    },
    makeEditable() {
        var nameInput = document.getElementById("nameInput");
        nameInput.readOnly = false;
        nameInput.classList.add("editable");
        document.getElementsByClassName("edit-button")[0].style.display = "none";
        document.getElementsByClassName("cancelBtn")[0].style.display = "inline-block";
        document.getElementsByClassName("updateBtn")[0].style.display = "inline-block";
    },
    cancelEdit() {
        var nameInput = document.getElementById("nameInput");
        nameInput.readOnly = true;
        nameInput.value = this.originalName;
        nameInput.classList.remove("editable");
        document.getElementsByClassName("edit-button")[0].style.display = "inline-block";
        document.getElementsByClassName("cancelBtn")[0].style.display = "none";
        document.getElementsByClassName("updateBtn")[0].style.display = "none";
    },
    updateValue() {
        var nameInput = document.getElementById("nameInput");
        //var newValue = nameInput.value;
        // Perform any necessary validation or processing here
        // For example, you can send the updated value to a server using AJAX
        //console.log("Updated value:", newValue);
        this.name = nameInput.value;
        this.originalName = this.name;
        // Make the input field read-only again and update the button display
        nameInput.readOnly = true;
        nameInput.classList.remove("editable");
        document.getElementsByClassName("edit-button")[0].style.display = "inline-block";
        document.getElementsByClassName("cancelBtn")[0].style.display = "none";
        document.getElementsByClassName("updateBtn")[0].style.display = "none";
    }
  }
};
</script>
<template>
    <div class="header">
        <div class="title">
            <span>LOT 5677 - A - 2 , PSD - 08 - D</span>
        </div>

        <div class="right-panel">
            <div class="editBtn">
                <button class="edit-button" @click="makeEditable()">
                    <span id ="edit-icon" class="material-symbols-rounded">
                        edit_square
                    </span> 
                    Edit    
                </button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="tabs">
            <div class="panel-tab" :class="{ active: activeComponent === 'surveydetails' }">
                <span class = "tab-text" :class="{ active: activeComponent === 'surveydetails' }">
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
        <div class="surveydetails-panel">
            <div class="survey-information-panel">
                <div class="survey-info-title">
                    <span>Survey Information</span>
                </div>
                <div class="survey-info-details">
                    <div class="survey-top">
                        <div class="survey-left">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Transaction Date</span>
                                </div>
                                <div class="survey-text">
                                    <input type="date" id="date-input">  
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Schedule of Survey</span>
                                </div>
                                <div class="survey-text">
                                    <input type="date" id="date-input">
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Claimant</span>
                                </div>
                                <input class="survey-text" id="nameInput" type="text" :value="name" :readonly="readOnly" />        
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Type of Survey</span>
                                </div>
                                <input class="survey-text" type="text" value="Consolidation - Subdivision" readonly>
                            </div>
                        </div>
                        <div class="survey-right">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Province</span>
                                </div>
                                <input class="survey-text" type="text" value="Leyte" readonly>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Municipality</span>
                                </div>
                                <input class="survey-text" type="text" value="Ormoc City" readonly>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Barangay</span>
                                </div>
                                <input class="survey-text" type="text" value="Airport" readonly>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Area</span>
                                </div>
                                <input class="survey-text" type="text" value="7,553 sq. m." readonly>
                            </div>
                        </div>
                    </div>
                    <div class="survey-bottom">
                        <div class="survey-information-subpanel">
                            <div class="subtitle-survey">
                                <span>Lot & Survey No.</span>
                            </div>
                            <input class="survey-text" type="text" value="LOT 5677 - A - 2 , PSD - 08 - D" readonly>
                        </div>   
                    </div>
                </div>
            </div>
            <div class="client-details-and-quotation-panel">
                <div class="client-details-panel">
                    <div class="client-details-title">
                        <span>Client Details</span>
                    </div>
                    <div class="survey-info-details">
                        <div class="survey-center">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Name</span>
                                </div>
                                <div class="survey-text">
                                    <span>Raphael S. Orillano</span>
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Relation to Claimant</span>
                                </div>
                                <div class="survey-text">
                                    <span>Son</span>
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Address</span>
                                </div>
                                <div class="survey-text">
                                    <span>Brgy. Airport, Ormoc City, Leyte</span>
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Mobile No.</span>
                                </div>
                                <div class="survey-text">
                                    <span>09563593324</span>
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Email Address</span>
                                </div>
                                <div class="survey-text">
                                    <span>raphael.orillano2@gmail.com</span>
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Messenger</span>
                                </div>
                                <div class="survey-text">
                                    <span>Raphael Saavedra Orillano</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="quotation-panel">
                    <div class="client-details-title">
                        <span>Quotation</span>
                    </div>
                    <div class="survey-info-details">
                        <div class="survey-center">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Quotation</span>
                                </div>
                                <div class="survey-text">
                                    <input type="file" id="myFile" name="filename">
                                </div>
                            </div>
                            <div class="quotation-subpanel">
                                <div class="details-of-pricing-title">
                                    <span>Details of Pricing</span>
                                </div>
                            </div>
                            <div class="details-of-pricing-subpanel">
                                <div class="first-panel">
                                    <div class="first-panel-title">
                                        <span>First Hectare</span>
                                    </div>
                                    <div class="first-panel-value">
                                        <span>1</span>
                                    </div>
                                </div>
                                <div class="second-panel">
                                    <span>@</span>
                                </div>
                                <div class="third-panel">
                                    <span>₱12,000</span>
                                </div>
                                <div class="fourth-panel">
                                    <span>=</span>
                                </div>
                                <div class="fifth-panel">
                                    <span>₱12,000</span>
                                </div>
                            </div>
                            <div class="details-of-pricing-subpanel">
                                <div class="first-panel">
                                    <div class="first-panel-title">
                                        <span>Succeeding</span>
                                    </div>
                                    <div class="first-panel-value">
                                        <span>7.2</span>
                                    </div>
                                </div>
                                <div class="second-panel">
                                    <span>@</span>
                                </div>
                                <div class="third-panel">
                                    <span>₱5,000</span>
                                </div>
                                <div class="fourth-panel">
                                    <span>=</span>
                                </div>
                                <div class="fifth-panel">
                                    <span>₱36,000</span>
                                </div>
                            </div>
                            <div class="details-of-pricing-subpanel">
                                <div class="first-panel">
                                    <div class="first-panel-title">
                                        <span>No. of Lots</span>
                                    </div>
                                    <div class="first-panel-value">
                                        <span>4</span>
                                    </div>
                                </div>
                                <div class="second-panel">
                                    <span>@</span>
                                </div>
                                <div class="third-panel">
                                    <span>₱10,000</span>
                                </div>
                                <div class="fourth-panel">
                                    <span>=</span>
                                </div>
                                <div class="fifth-panel">
                                    <span>₱40,000</span>
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Total Amount</span>
                                </div>
                                <div class="survey-text">
                                    <span>₱88,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="survey-information-panel">
                <div class="survey-info-title">
                    <span>Survey Attachments</span>
                </div>
                <div class="survey-info-details">
                    <div class="survey-top">
                        <div class="survey-left">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Document</span>
                                </div>
                                <div class="survey-text">
                                    <input type="file" id="myFile" name="filename">
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Photos</span>
                                </div>
                                <div class="survey-text">
                                    <input type="file" id="myFile" name="filename">
                                </div>
                            </div>
                        </div>
                        <div class="survey-right">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>CAD Plan</span>
                                </div>
                                <div class="survey-text">
                                    <input type="file" id="myFile" name="filename">
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>eSurvey</span>
                                </div>
                                <div class="survey-text">
                                    <input type="file" id="myFile" name="filename">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons-panel">
                <button class="cancelBtn" @click="cancelEdit()">Cancel</button>
                <button class="updateBtn" @click="updateValue()">Update</button>
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

#edit-icon{
    font-size: 16px;
    padding-right: 5px;
    padding-bottom: 3px;
}
.editBtn button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    background-color: #2EA54C;
    color: white;
    border: none;
    font-size: 14px;
    padding: 0 15px;
    cursor: pointer;

}

.editBtn button:hover{
    background-color: #2ea54ce3;
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

#date-input{
    border: none;
    height: 28px;
    width: 100%;
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

.survey-top{
    display: flex;
    align-items: center;
}

.survey-bottom{
    display: flex;
    align-items: center;
}

.survey-right, .survey-left{
    width: 50%;
}

.survey-right{
    margin-left: .5%;
}

.survey-left{
    margin-right: .5%;
}
.survey-center{
    width: 100%;
}

.surveydetails-panel
{
    background-color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.survey-info-title, .client-details-title{
    display: flex;
    background-color: #007BFF;
    justify-content: center;
    color: white;
    border-radius: 3px;
    padding: 5px 0px;
}

#edit-square-icon{
    margin: 0;
    font-size: 20px;
}

.survey-information-panel{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.client-details-and-quotation-panel{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.client-details-panel{
    width: 50%;
    margin-right: .5%;
}

.quotation-panel{
    width: 50%;
    margin-left: .5%
}

.survey-information-subpanel{
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    padding: 2px 0;
    align-items: center;
}
.quotation-subpanel{
    display: grid;
    width: 100%;
    padding: 2px 0;
    align-items: center;
    text-align: center;
}

.survey-text{
    display: flex;
    justify-content: left;
    align-items: center;
    border: 1px var(--border) solid;
    border-left: none;
    text-align: left;
    padding: 0 5px;
    padding-left: 10px;
    height: 100%;
    border-radius: 0 3px 3px 0;
    font-size: 15px;
}

.subtitle-survey{
    border: 1px var(--border) solid;
    background-color: var(--grey);
    padding: 2px 10px;
    width: auto;
    border-radius: 3px 0 0 3px;
}
.details-of-pricing-title{
    border: 1px var(--border) solid;
    background-color: var(--grey);
    padding: 2px 10px;
    width: auto;
    border-radius: 3px;
}

.survey-info-details{
    padding: 2px 0px;
    display: flex;
    flex-direction: column;
}

.survey-button button{
    border: 1px var(--border) solid;
    border-radius: 0 3px 3px 0;
}

#calendar-icon{
    color:#343A40;
    font-size: 20px;
}

.details-of-pricing-subpanel{
    display: grid;
    grid-template-columns: auto auto 1fr auto 1fr;
    width: 100%;
    padding: 2px 0;
    align-items: center;
}
 
.first-panel{
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    align-items: center;
}

.second-panel, .fourth-panel{
    display: flex;
    padding: 2px 10px;
    border-radius: 3px 0 0 3px;
    justify-content: center;
    align-items: center;
}

.third-panel, .fifth-panel{    
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px var(--border) solid;
    text-align: center;

    height: 100%;
    border-radius: 3px;
}

.first-panel-title{
    border: 1px var(--border) solid;
    background-color: var(--grey);
    padding: 2px 10px;
    width: auto;
    border-radius: 3px 0 0 3px;
}
.first-panel-value{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px var(--border) solid;
    border-left: none;
    text-align: center;
    height: 100%;
    border-radius: 0 3px 3px 0;
    width: 35px;
}

#myFile{
    width: 100%;
}

.buttons-panel{
    display: flex;
    align-items: center;
    justify-content: right;
    margin-top: 10px;
}

.cancelBtn{
    display: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #EE4035;
    color: white;
}

.updateBtn{
    display: none;
    margin-left: 10px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color:#007BFF;
    color: white;
}

.cancelBtn:hover{
    background-color: #ee4135d2;
    transition: .3s;
}

.updateBtn:hover{
    background-color: #007bffcf;
    transition: .3s;
}
</style>