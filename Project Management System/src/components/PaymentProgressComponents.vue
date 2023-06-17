<script>
export default {
    data() { 
        return {
            totalAmount: 10000,
            balanceAmount: 0,
            downPayment: 0,
            finalPayment: 0,
            downPaymentDate: "",
            finalPaymentDate: "",
            downPaymentOR: 0,
            finalPaymentOR: 0,
            makeEditable: false,
            addPayment: false,
            originalValues: {
                downPayment: 0,
                finalPayment: 0,
            },
            originalDates: {
                downPaymentDate: "",
                finalPaymentDate: "",
            },
            originalORs: {
                downPaymentOR: 0,
                finalPaymentOR: 0,
            },
            originalPaymentRows: [],
            paymentRows: [
                { amount: 0, date: "", orNumber: 0 }
            ],
        };  
    },
    computed: {
        activeComponent() {
            return this.$route.meta.activeComponent;
        },
        progressPercentage() {
            if(this.totalAmount !== this.balanceAmount)
                return Math.round((1 - (this.balanceAmount / this.totalAmount)) * 100);
            return 0;
        },
        computeBalance() {
            const paymentAmounts = this.paymentRows.reduce(
                (total, row) => total + parseFloat(row.amount),
                0
            );
            this.balanceAmount = this.totalAmount - (this.downPayment + this.finalPayment + paymentAmounts);          
            return this.balanceAmount;
        },
  
    },
    methods: {
        redirectTosurveydetails() {
            this.$router.push('/surveydetails')
        },
        redirectTosurveyprogress() {
            this.$router.push('/surveyprogress')
        },
        updateValues() {
            this.makeEditable = !this.makeEditable;
        },
        cancelChanges() {
            // Payment
            this.downPayment = this.originalValues.downPayment;
            this.finalPayment = this.originalValues.finalPayment;
            // Date
            this.downPaymentDate = this.originalDates.downPaymentDate;
            this.finalPaymentDate = this.originalDates.finalPaymentDate;
            //OR#
            this.downPaymentOR = this.originalORs.downPaymentOR;
            this.finalPaymentOR = this.originalORs.finalPaymentOR;

            this.paymentRows = JSON.parse(JSON.stringify(this.originalPaymentRows));

            this.makeEditable = false;
        },
        toggleEditable() {
            if (!this.makeEditable) {
                //Payment
                this.originalValues.downPayment = this.downPayment;
                this.originalValues.finalPayment = this.finalPayment;
                // Date
                this.originalDates.downPaymentDate = this.downPaymentDate;
                this.originalDates.finalPaymentDate = this.finalPaymentDate;
                //OR#
                this.originalORs.downPaymentOR = this.downPaymentOR;
                this.originalORs.finalPaymentOR = this.finalPaymentOR;

                this.originalPaymentRows = JSON.parse(JSON.stringify(this.paymentRows));
            }
            this.makeEditable = !this.makeEditable;
        },
        addPaymentRow() {
            if (this.paymentRows.length < 4) {
                this.paymentRows.push({ amount: 0, date: "", orNumber: 0 });
            }
        },
        removePaymentRow() {
            if (this.paymentRows.length != 0) {
                this.paymentRows.pop({ amount: 0, date: "", orNumber: 0 });
            }
        },
    },
};
</script>
<template>
    <div class="header">
        <div class="title">
            <span>Payment Progress</span>
        </div>
        <div class="right-panel">
            <div class="editBtn-payment">
                <button class="edit-button-payment" @click="toggleEditable" v-show="!makeEditable">
                    <span id ="edit-icon" class="material-symbols-rounded">edit_square</span> 
                    Edit    
                </button>
            </div>
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
            <div class="payment-panel">
                <div class="client-button-subpanel">
                    <div class="payment-record-client">
                        <div class="payment-record-for">
                            <span>Payment Record for</span>
                        </div>
                        <span class="client-name">Raphael Orillano</span>
                    </div>
                    <button class="remove-payment-button" @click="removePaymentRow">Remove Payment</button>
                    <button class="add-payment-button" @click="addPaymentRow">Add Payment</button>
                </div>
                <table class="payment-record-table">
                    <tr class="payment-record-titles">
                        <th>Payment Breakdown</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Official Receipt #</th>
                    </tr>
                    <tr>
                        <th class="pb-title">Total Amount:</th>
                        <th><span>{{ totalAmount }}</span></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th class="pb-title">Down Payment:</th>
                        <th><input class="amount" type="number" min="0" max="10000" v-model.lazy="downPayment" :disabled="!makeEditable"/></th>
                        <th><input class="transact-date" id="" type="date" v-model.lazy="downPaymentDate" :disabled="!makeEditable"/></th>
                        <th><input class="or-number" type="number" v-model.lazy="downPaymentOR" :disabled="!makeEditable"/></th>
                    </tr>       
                    <tr v-for="(row, index) in paymentRows" :key="index">
                    <template v-if="index !== 0">
                        <th class="pb-title">Payment {{ index + 1 }}:</th>
                        <th><input class="amount" type="number" v-model.lazy="row.amount" :disabled="!makeEditable" /></th>
                        <th><input class="transact-date" type="date" v-model.lazy="row.date" :disabled="!makeEditable" /></th>
                        <th><input class="or-number" type="number" v-model.lazy="row.orNumber" :disabled="!makeEditable" /></th>
                    </template>
                    </tr>         
                    <tr>
                        <th class="pb-title">Final Payment:</th>
                        <th><input class="amount" type="number" v-model.lazy="finalPayment" :disabled="!makeEditable"/></th>
                        <th><input class="transact-date" type="date" v-model.lazy="finalPaymentDate" :disabled="!makeEditable"/></th>
                        <th><input class="or-number" type="number" v-model.lazy="finalPaymentOR" :disabled="!makeEditable"/></th>
                    </tr>
                    <tr>
                        <th class="pb-title">Balance Todate:</th>
                        <th><span>{{ computeBalance }}</span></th>
                        <th></th>
                        <th></th>
                    </tr>
                </table>
            </div>
            <div class="buttons-panel-payment" v-show="makeEditable">
                <button class="cancelBtn-payment" @click="cancelChanges">Cancel</button>
                <button class="updateBtn-payment" @click="updateValues">Update</button>
            </div>
        </div>    
    </div>
</template>
<style scoped>
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

.editBtn-payment button{
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

.editBtn-payment button:hover{
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
    width: 0%;
    transition: 1s;
    max-width: 100%;
}
.progress-blue-bar{
    background-color:rgba(255, 255, 255, 0.402);
    height: 23px;
    border-radius: 20px;
    width: 100%;
}

.client-button-subpanel{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.payment-record-client{
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    padding: 5px 0;
}

.payment-record-for span{
    background-color: var(--grey);
    border: 1px var(--border) solid;
    border-radius: 3px 0 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0 10px;
    height: 35px;
}

.client-name{
    width: auto;
    border: 1px var(--border) solid;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 0 3px 3px 0;
    border-left: none;
    max-width: 250px;
}

.add-payment-button,  .remove-payment-button{
    background-color: #2EA54C;
    white-space: nowrap;
    color: white;
    height: 35px;
    border: none;
    cursor: pointer;
    padding: 0 10px;
    margin-left: 10px;
}

.remove-payment-button
{
    background-color: #EE4035;
}

.payment-panel{
    padding: 0 150px;
}

.payment-record-table{
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    font-size: 15px;
}

.payment-record-table th, td{
    border: .5px solid #dddddd;
}

.payment-record-titles{
    border-radius: 5px;
}

.payment-record-titles th{
    height: 40px;
    white-space: nowrap;
    font-weight: bold;
    background-color: #007BFF;
    color: white;
    padding: 0 10px;
}

/*
.payment-record-table tr:nth-child(odd){
    background-color: #dddddd;
}*/ 

.pb-title{
    height: 40px;
    text-align: left;
    padding: 0 10px;
}

.amount, .or-number, .transact-date{
    height: 40px;
    width: 100%;
    text-align: center;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    font-size: 15px;
}

.amount{
    min-width: 150px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


.buttons-panel-payment{
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 20px 150px;
    margin-bottom: 0;
}

.cancelBtn-payment{
    display: flex;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #EE4035;
    color: white;
}

.updateBtn-payment{
    display: flex;
    margin-left: 10px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color:#007BFF;
    color: white;
}

.cancelBtn-payment:hover{
    background-color: #ee4135d2;
    transition: .3s;
}

.updateBtn-payment:hover{
    background-color: #007bffcf;
    transition: .3s;
}

</style>