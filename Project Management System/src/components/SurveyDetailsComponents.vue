<script>
export default {
    data() {
    return {
        newInput: "",
        isUpdateAction: false,
        disabled: true,
        originalTotalAmount: 0,
        first_product: 0,
        second_product: 0,
        third_product: 0,
        originalInputs: {}, // Add this data property
        originalMultipliers: {},
        originalMultiplicands: {},
        title: "",
        pairs: [
            { multiplicand: 1, multiplier: 0 },
            { multiplicand: 0, multiplier: 0 },
            { multiplicand: 0, multiplier: 0 }
        ]
    };
},
computed: {
    activeComponent() {
        return this.$route.meta.activeComponent;
    },
    computeProduct() {
        return this.pairs.map(pair => pair.multiplicand * pair.multiplier);
    },
    firstProduct() {
        if(this.isUpdateAction)
        {
            var product = this.computeProduct[0];
            this.first_product = product;
            return product;
        }
        return this.first_product;
    },
    secondProduct() {
        if(this.isUpdateAction)
        {
            var product = this.computeProduct[1];
            this.second_product = product;
            return product;
        }
        return this.second_product;
    },
    thirdProduct() {
        if(this.isUpdateAction)
        {
            var product = this.computeProduct[2];
            this.third_product = product;
            return product;
        }
        return this.third_product;
    },
    computeTotalAmount() {
        if(this.isUpdateAction) {
            var total_amount = this.computeProduct[0] + this.computeProduct[1] + this.computeProduct[2];
            this.originalTotalAmount = total_amount;
            return total_amount;    
        }
        return this.originalTotalAmount;
    }
},
methods: {
    updateTitle() {
        var newTitleElement = document.getElementById('lotInput').value;
        this.title = newTitleElement;
    },
    redirectTosurveydetails() {
        this.$router.push('/surveydetails')
    },
    redirectTosurveyprogress() {
        this.$router.push('/surveyprogress')
    },
    redirectTopaymentprogress() {
        this.$router.push('/paymentprogress')
    },
    makeEditable() {   
        var multiplier = document.getElementsByClassName("number-multiplier");
        for (var i = 0; i < multiplier.length; i++) {
            var input = multiplier[i];
            var originalValue = input.value;
            this.originalMultipliers[input.id] = originalValue;
            input.disabled = false;
            input.classList.add("editable");
        }

        var multiplicand = document.getElementsByClassName("number-multiplicand"); 
        for (var i = 1; i < multiplicand.length; i++) {
            var input = multiplicand[i];
            var originalValue = input.value;
            this.originalMultiplicands[input.id] = originalValue;
            input.disabled = false;
            input.classList.add("editable");    
        }

        var inputs = document.getElementsByClassName("input-text");
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            var originalValue = input.value;
            this.originalInputs[input.id] = originalValue;
            input.disabled = false;
            input.classList.add("editable");
        }
        this.isUpdateAction = false;
        document.getElementsByClassName("edit-button")[0].style.display = "none";
        document.getElementsByClassName("cancelBtn")[0].style.display = "inline-block";
        document.getElementsByClassName("updateBtn")[0].style.display = "inline-block";
    },
    cancelEdit() {
        var inputs = document.getElementsByClassName("input-text");
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            var originalValue = this.originalInputs[input.id];
            input.value = originalValue;
            input.disabled = true;
            input.classList.remove("editable");
        }

        var multiplier = document.getElementsByClassName("number-multiplier");
        for (var i = 0; i < multiplier.length; i++) {
            var input = multiplier[i];
            var originalValue = this.originalMultipliers[input.id];
            input.value = originalValue;
            input.disabled = true;
            input.classList.remove("editable");
        }

        var multiplicand = document.getElementsByClassName("number-multiplicand");
        for (var i = 1; i < multiplicand.length; i++) {
            var input = multiplicand[i];
            var originalValue = this.originalMultiplicands[input.id];
            input.value = originalValue;
            input.disabled = true;
            input.classList.remove("editable");
        }

        this.isUpdateAction = false;
        document.getElementsByClassName("edit-button")[0].style.display = "inline-block";
        document.getElementsByClassName("cancelBtn")[0].style.display = "none";
        document.getElementsByClassName("updateBtn")[0].style.display = "none";
    },
    updateValue() {
        var multiplier = document.getElementsByClassName("number-multiplier");
        for (var i = 0; i < multiplier.length; i++) {
            var newValue = multiplier[i].value;
            this.newInput = newValue;
            this.originalMultipliers[multiplier[i].id] = newValue;
            multiplier[i].disabled = true;
            multiplier[i].classList.remove("editable");
        }

        var multiplicand = document.getElementsByClassName("number-multiplicand");
        for (var i = 1; i < multiplicand.length; i++) {
            var newValue = multiplicand[i].value;
            this.newInput = newValue;
            this.originalMultiplicands[multiplicand[i].id] = newValue;
            multiplicand[i].disabled = true;
            multiplicand[i].classList.remove("editable");
        }

        var inputs = document.getElementsByClassName("input-text");
        for (var i = 0; i < inputs.length; i++) {
            var newValue = inputs[i].value;
            this.newInput = newValue;
            this.originalInputs[inputs[i].id] = newValue;
            inputs[i].disabled = true;
            inputs[i].classList.remove("editable");
        }
        this.isUpdateAction = true;
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
            <span>{{ title }}</span>
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
            <div class="panel-tab" :class="{ active: activeComponent === 'paymentprogress' }" @click="redirectTopaymentprogress">
                <span class = "tab-text" :class="{ active: activeComponent === 'paymentprogress' }" @click="redirectTopaymentprogress">
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
                                <input class="input-text" type="date" id="date-input" :disabled="disabled">
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Schedule of Survey</span>
                                </div>
                                <input class="input-text" type="date" id="date-input" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Claimant</span>
                                </div>
                                <input class="input-text" id="claimantInput" type="text" :disabled="disabled"/>        
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Type of Survey</span>
                                </div>
                                <input class="input-text" id="surveyInput" type="text" :disabled="disabled"/>
                            </div>
                        </div>
                        <div class="survey-right">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Province</span>
                                </div>
                                <input class="input-text" id="provinceInput" type="text" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Municipality</span>
                                </div>
                                <input class="input-text" id="municipalityInput" type="text" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Barangay</span>
                                </div>
                                <input class="input-text" id="barangayInput" type="text" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Area</span>
                                </div>
                                <input class="input-text" id="areaInput" type="text" :disabled="disabled"/>
                            </div>
                        </div>
                    </div>
                    <div class="survey-bottom">
                        <div class="survey-information-subpanel">
                            <div class="subtitle-survey">
                                <span>Lot & Survey No.</span>
                            </div>
                            <input class="input-text" id="lotInput" type="text" :disabled="disabled"/>
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
                                <input class="input-text" id="nameInput" type="text" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Relation to Claimant</span>
                                </div>
                                <input class="input-text" id="relationInput" type="text" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Address</span>
                                </div>
                                <input class="input-text" id="addressInput" type="text" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Mobile No.</span>
                                </div>
                                <input class="input-text" id="mobileInput" type="text" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Email Address</span>
                                </div>
                                <input class="input-text" id="emailInput" type="email" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Messenger</span>
                                </div>
                                <input class="input-text" id="messengerInput" type="text" :disabled="disabled"/>
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
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled"/>              
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
                                    <input class="number-multiplicand" id="firstHectareInput" type="number" v-model="pairs[0].multiplicand" :disabled="disabled"/>
                                </div>
                                <div class="second-panel">
                                    <span>@</span>
                                </div>
                                <input class="number-multiplier" id="firstHectareMultiplier" type="number" v-model="pairs[0].multiplier" :disabled="disabled"/>
                                <div class="fourth-panel">
                                    <span>=</span>
                                </div>
                                <div class="fifth-panel">
                                    <span>₱{{ firstProduct }}</span>
                                </div>
                            </div>
                            <div class="details-of-pricing-subpanel">
                                <div class="first-panel">
                                    <div class="first-panel-title">
                                        <span>Succeeding</span>
                                    </div>
                                    <input class="number-multiplicand" id="succeedingInput" type="number" v-model="pairs[1].multiplicand" :disabled="disabled"/>
                                </div>
                                <div class="second-panel">
                                    <span>@</span>
                                </div>
                                <input class="number-multiplier" id="succeedingMultiplier" type="number" v-model="pairs[1].multiplier" :disabled="disabled"/>
                                <div class="fourth-panel">
                                    <span>=</span>
                                </div>
                                <div class="fifth-panel">
                                    <span>₱{{ secondProduct }}</span>
                                </div>
                            </div>
                            <div class="details-of-pricing-subpanel">
                                <div class="first-panel">
                                    <span class="first-panel-title">No. of Lots</span>
                                    <input class="number-multiplicand" id="noOfLotsInput" type="number" v-model="pairs[2].multiplicand" :disabled="disabled"/>
                                </div>
                                <span class="second-panel">@</span>
                                <input class="number-multiplier" id="noOfLotsMultiplier" type="number" v-model="pairs[2].multiplier" :disabled="disabled"/>
                                <span class="fourth-panel">=</span>
                                <div class="fifth-panel">
                                    <span>₱{{ thirdProduct }}</span>
                                </div>
                            </div>
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">Total Amount</span>
                                <span class="total-amount">₱{{ computeTotalAmount }}</span>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="survey-information-panel">
                <span class="survey-info-title">Survey Attachments</span>
                <div class="survey-info-details">
                    <div class="survey-top">
                        <div class="survey-left">
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">Document</span>
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">Photos</span>
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled"/>
                            </div>
                        </div>
                        <div class="survey-right">
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">CAD Plan</span>
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">eSurvey</span>
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons-panel">
                <button class="cancelBtn" @click="cancelEdit()">Cancel</button>
                <button class="updateBtn" @click="updateValue(); updateTitle()">Update</button>
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
    border: 1px var(--border) solid;
    border-left: none;
    height: 100%;
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

.input-text{
    background-color: rgba(255, 255, 255, 0);
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

.number-multiplicand{
    display: flex;
    border: 1px var(--border) solid;
    height: 100%;
    border-left: none;
    border-radius: 0 3px 3px 0;
    width: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
}

.second-panel, .fourth-panel{
    display: flex;
    padding: 2px 10px;
    justify-content: center;
    align-items: center;
}

.number-multiplier, .fifth-panel{    
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px var(--border) solid;
    text-align: center;
    height: 100%;
    border-radius: 3px;
    font-size: 15px;
}

.fifth-panel{    
    padding: 0 20px;
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

.total-amount{
    border: 1px var(--border) solid;
    height: 100%;
    border-left: none;
    border-radius: 0 3px 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/*
input[type="number"].plain-number-input {
  -moz-appearance: textfield;
}*/

</style>