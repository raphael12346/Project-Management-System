<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { db } from "../firebase.js";
import { getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const userId = ref('')

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    userId.value = user.uid.toString(); // Convert to string
    console.log(userId.value);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const totalAmount = ref(10000);
const balanceAmount = ref(0);
const downPayment = ref(0);
const finalPayment = ref(0);
const downPaymentDate = ref("");
const finalPaymentDate = ref("");
const downPaymentOR = ref(0);
const finalPaymentOR = ref(0);
const makeEditable = ref(false);
const paymentRows = ref([
    { amount: 0, date: "", orNumber: 0 }
]);

const submitform = () => {
    const project = "LOT 1500";
    // Submit to Firebase
    db.collection("Users")
    .doc(userId.value)
    .collection("Projects")
    .doc(project)
    .collection("Documents")
    .doc("Payment")
    .set({
        totalAmount: totalAmount.value,
        balanceAmount: balanceAmount.value,
        downPayment: downPayment.value,
        finalPayment: finalPayment.value,
        downPaymentDate: downPaymentDate.value,
        finalPaymentDate: finalPaymentDate.value,
        downPaymentOR: downPaymentOR.value,
        finalPaymentOR: finalPaymentOR.value,
        paymentRows: paymentRows.value,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
};

const initializeComponent = async () =>{
    if (!userId.value) {
        // User ID is not available yet, wait for it
        return;
    }
    try {
    const Payment = db.collection("Users").doc(userId.value).collection("Projects").doc("LOT 1500").collection("Documents").doc('Payment');
    const docSnapshotP = await getDoc(Payment);

    if (docSnapshotP.exists()) {   
        const data = docSnapshotP.data();
        totalAmount.value = data.totalAmount;
        balanceAmount.value = data.balanceAmount;
        downPayment.value = data.downPayment;
        finalPayment.value = data.finalPayment;
        downPaymentDate.value = data.downPaymentDate;
        finalPaymentDate.value = data.finalPaymentDate;
        downPaymentOR.value = data.downPaymentOR;
        finalPaymentOR.value = data.finalPaymentOR;
        paymentRows.value = data.paymentRows || [];
    } else {
        // Document does not exist
        console.log('Document does not exist.');
    }

    } catch (error) {
        console.error('Error fetching document:', error);
    }
}

onMounted(async () => {
  // Wait for onAuthStateChanged callback to set the userId
  await new Promise(resolve => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userId.value = user.uid.toString();
        unsubscribe();
        resolve();
      }
    });
  });

  // Now that userId is set, initialize the component
  await initializeComponent();
});

const route = useRoute();
const router = useRouter();

const activeComponent = computed(() => route.meta.activeComponent);

const redirectTosurveydetails = () => {
    router.push('/surveydetails');
};

const redirectTosurveyprogress = () => {
    router.push('/surveyprogress');
};

const updateValues = async () => {
    makeEditable.value = !makeEditable.value;
    submitform();
    await initializeComponent();
};

const cancelChanges = async () => {
    await initializeComponent();
    makeEditable.value = false;
};

const toggleEditable = () => {
    makeEditable.value = !makeEditable.value;
};

const addPaymentRow = async () => {
    if (paymentRows.value.length < 4) {
        paymentRows.value.push({ amount: 0, date: "", orNumber: 0 });
    }
    submitform();
    await initializeComponent();
};

const removePaymentRow = async () => {
    if (paymentRows.value.length !== 0) {
        paymentRows.value.pop({ amount: 0, date: "", orNumber: 0 });
    }
    submitform();
    await initializeComponent();
};

const progressPercentage = computed(() => {
    if (totalAmount.value !== balanceAmount.value) {
        return Math.round((1 - (balanceAmount.value / totalAmount.value)) * 100);
    }
    return 0;
});

const computeBalance = computed(() => {
    const paymentAmounts = paymentRows.value.reduce(
        (total, row) => total + parseFloat(row.amount),
        0
    );
    balanceAmount.value = totalAmount.value - (downPayment.value + finalPayment.value + paymentAmounts);
    return balanceAmount.value;
});
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
                        <th class="pb-title">Partial Payment</th>
                        <th><input class="amount" type="number" v-model.lazy="row.amount" :disabled="!makeEditable" /></th>
                        <th><input class="transact-date" type="date" v-model.lazy="row.date" :disabled="!makeEditable" /></th>
                        <th><input class="or-number" type="number" v-model.lazy="row.orNumber" :disabled="!makeEditable" /></th>
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