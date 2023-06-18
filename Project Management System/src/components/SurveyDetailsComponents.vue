<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { db, storage } from "../firebase.js";
import { getDoc } from 'firebase/firestore';

const SurveyAttachmentseSurveyFile = (event) => {
  const project = lotAndSurveyNo.value;
  const file = event.target.files[0];
  const fileName = file.name;
  const filePath = `${project}/eSurvey/${fileName}`;
  const storageRef = storage.ref().child(filePath);
  const uploadTask = storageRef.put(file);

  uploadTask
    .then((snapshot) => {
      return Promise.all([snapshot.ref.getDownloadURL(), fileName]);
    })
    .then(([downloadURL, fileName]) => {
      // Get the existing Survey_Attachments data
      return db.collection(project).doc('Survey_Attachments').get()
        .then((doc) => {
          // Update the document with the new data without overwriting existing data
          return db.collection(project).doc('Survey_Attachments').set({
            ...doc.data(),
            SurveyAttachmentseSurveyURL: downloadURL,
            SurveyAttachmentseSurveyFileName: fileName
          });
        });
    })
    .then(() => {
      console.log('Successfully uploaded and saved the URL and file name');
    })
    .catch((error) => {
      console.log('Failed to upload or save the URL and file name:', error);
    });
};

const SurveyAttachmentsQuatationFile = (event) => {
  const project = lotAndSurveyNo.value;
  const file = event.target.files[0];
  const fileName = file.name;
  const filePath = `${project}/Quatation/${fileName}`;
  const storageRef = storage.ref().child(filePath);
  const uploadTask = storageRef.put(file);

  uploadTask
    .then((snapshot) => {
      return Promise.all([snapshot.ref.getDownloadURL(), fileName]);
    })
    .then(([downloadURL, fileName]) => {
      // Get the existing Survey_Attachments data
      return db.collection(project).doc('Survey_Attachments').get()
        .then((doc) => {
          // Update the document with the new data without overwriting existing data
          return db.collection(project).doc('Survey_Attachments').set({
            ...doc.data(),
            SurveyAttachmentsQuatationURL: downloadURL,
            SurveyAttachmentsQuatationFileName: fileName
          });
        });
    })
    .then(() => {
      console.log('Successfully uploaded and saved the URL and file name');
    })
    .catch((error) => {
      console.log('Failed to upload or save the URL and file name:', error);
    });
};

const handleAutoCADUpload = (event) => {
  const project = lotAndSurveyNo.value;
  const file = event.target.files[0];
  const fileName = file.name;
  const filePath = `${project}/CAD/${fileName}`;
  const storageRef = storage.ref().child(filePath);
  const uploadTask = storageRef.put(file);

  uploadTask
    .then((snapshot) => {
      return Promise.all([snapshot.ref.getDownloadURL(), fileName]);
    })
    .then(([downloadURL, fileName]) => {
      // Get the existing Survey_Attachments data
      return db.collection(project).doc('Survey_Attachments').get()
        .then((doc) => {
          // Update the document with the new data without overwriting existing data
          return db.collection(project).doc('Survey_Attachments').set({
            ...doc.data(),
            SurveyAttachmentsCadUrl: downloadURL,
            SurveyAttachmentsCadFileName: fileName
          });
        });
    })
    .then(() => {
      console.log('Successfully uploaded and saved the URL and file name');
    })
    .catch((error) => {
      console.log('Failed to upload or save the URL and file name:', error);
    });
};

const Survey_Attachments_Doc = (event) => {
  const project = lotAndSurveyNo.value;
  const file = event.target.files[0];
  const fileName = file.name;
  const filePath = `${project}/Documents/${fileName}`;
  const storageRef = storage.ref().child(filePath);
  const uploadTask = storageRef.put(file);

  uploadTask
    .then((snapshot) => {
      return Promise.all([snapshot.ref.getDownloadURL(), fileName]);
    })
    .then(([downloadURL, fileName]) => {
      // Get the existing Survey_Attachments data
      return db.collection(project).doc('Survey_Attachments').get()
        .then((doc) => {
          // Update the document with the new data without overwriting existing data
          return db.collection(project).doc('Survey_Attachments').set({
            ...doc.data(),
            SurveyAttachmentsDocUrl: downloadURL,
            SurveyAttachmentsDocFileName: fileName
          });
        });
    })
    .then(() => {
      console.log('Successfully uploaded and saved the URL and file name');
    })
    .catch((error) => {
      console.log('Failed to upload or save the URL and file name:', error);
    });
};

const SurveyAttachmentsPhoto = (event) => {
  const project = lotAndSurveyNo.value;
  const file1 = event.target.files[0];
  const fileName = file1.name;
  const filePath = `${project}/Photo/${fileName}`;
  const storageRef = storage.ref().child(filePath);
  const uploadTask = storageRef.put(file1);

  uploadTask
    .then((snapshot) => {
      return Promise.all([snapshot.ref.getDownloadURL(), fileName]);
    })
    .then(([downloadURL, fileName]) => {
      // Get the existing Survey_Attachments data
      return db.collection(project).doc('Survey_Attachments').get()
        .then((doc) => {
          // Update the document with the new data without overwriting existing data
          return db.collection(project).doc('Survey_Attachments').set({
            ...doc.data(),
            SurveyAttachmentsPhotoUrl: downloadURL,
            SurveyAttachmentsPhotoFileName: fileName
          });
        });
    })
    .then(() => {
      console.log('Successfully uploaded and saved the URL and file name');
    })
    .catch((error) => {
      console.log('Failed to upload or save the URL and file name:', error);
    });
};


//Firestore Database
const transactionDate = ref('');
const scheduleOfSurvey = ref('');
const claimant = ref('');
const typeOfSurvey = ref('');
const province = ref('');
const municipality = ref('');
const barangay = ref('');
const area = ref('');
const lotAndSurveyNo = ref('');
const clientName = ref('');
const relationToClaimant = ref('');
const address = ref('');
const mobileNo = ref('');
const emailAddress = ref('');
const messenger = ref('');
const SurveyAttachmentsPhotoFileName = ref('');
const SurveyAttachmentsDocFileName = ref('');
const SurveyAttachmentsCadFileName = ref('');
const SurveyAttachmentsQuatationFileName = ref('');
const SurveyAttachmentseSurveyFileName = ref('');


const submitform = () => {
  const project = lotAndSurveyNo.value;
  // Submit to Firebase
  db.collection(project)
    .doc("Survey_Information")
    .set({
      transactionDate: transactionDate.value,
      scheduleOfSurvey: scheduleOfSurvey.value ,
      claimant: claimant.value,
      typeOfSurvey: typeOfSurvey.value,
      province: province.value,
      municipality: municipality.value,
      barangay: barangay.value,
      area: area.value,
      lotAndSurveyNo: lotAndSurveyNo.value,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

    db.collection(project)
    .doc("Client_Details")
    .set({
      clientName: clientName.value,
      relationToClaimant: relationToClaimant.value,
      address: address.value,
      mobileNo: mobileNo.value,
      emailAddress: emailAddress.value,
      messenger: messenger.value,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

onMounted(async () => {
  try {
    const Survey_Information = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('Survey_Information');
    const docSnapshotSI = await getDoc(Survey_Information);

    const Client_Details = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('Client_Details');
    const docSnapshotCD = await getDoc(Client_Details);

    const Survey_Attachments = db.collection("LOT 5677 - A - 2, PSD - 08 - A").doc('Survey_Attachments');
    const docSnapshotSA = await getDoc(Survey_Attachments);

    if (docSnapshotSI.exists()) {
      const data = docSnapshotSI.data();
      transactionDate.value = data.transactionDate;
      scheduleOfSurvey.value = data.scheduleOfSurvey;
      claimant.value = data.claimant;
      typeOfSurvey.value = data.claimant;
      province.value = data.claimant;
      municipality.value = data.municipality;
      barangay.value = data.barangay;
      area.value = data.area;
      lotAndSurveyNo.value = data.lotAndSurveyNo;
    } else {
      // Document does not exist
      console.log('Document does not exist.');
    }

    if (docSnapshotSA.exists()) {
      const data = docSnapshotSA.data();
      SurveyAttachmentsPhotoFileName.value = data.SurveyAttachmentsPhotoFileName;
      SurveyAttachmentsDocFileName.value = data.SurveyAttachmentsDocFileName;
      SurveyAttachmentsCadFileName.value = data.SurveyAttachmentsCadFileName;
      SurveyAttachmentsQuatationFileName.value  = data.SurveyAttachmentsQuatationFileName;
      SurveyAttachmentseSurveyFileName.value  = data.SurveyAttachmentseSurveyFileName;
    } else {
      // Document does not exist
      console.log('Document does not exist.');
    }

    if (docSnapshotCD.exists()) {
      const data = docSnapshotCD.data();
      clientName.value = data.clientName;
      relationToClaimant.value = data.relationToClaimant;
      address.value = data.address;
      mobileNo.value = data.mobileNo;
      emailAddress.value = data.emailAddress;
      messenger.value = data.messenger;
    } else {
      // Document does not exist
      console.log('Document does not exist.');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
});


//Logic in template
const newInput = ref("");
const isUpdateAction = ref(false);
const disabled = ref(true);
const originalTotalAmount = ref(0);
const first_product = ref(0);
const second_product = ref(0);
const third_product = ref(0);
const originalInputs = ref({});
const originalMultipliers = ref({});
const originalMultiplicands = ref({});
const title = ref("Survey Details");
const pairs = ref([
  { multiplicand: 1, multiplier: 0 },
  { multiplicand: 0, multiplier: 0 },
  { multiplicand: 0, multiplier: 0 }
]);

const router = useRouter();

const computeProduct = computed(() =>
  pairs.value.map(pair => pair.multiplicand * pair.multiplier)
);

const firstProduct = computed(() => {
  if (isUpdateAction.value) {
    const product = computeProduct.value[0];
    first_product.value = product;
    return product;
  }
  return first_product.value;
});

const secondProduct = computed(() => {
  if (isUpdateAction.value) {
    const product = computeProduct.value[1];
    second_product.value = product;
    return product;
  }
  return second_product.value;
});

const thirdProduct = computed(() => {
  if (isUpdateAction.value) {
    const product = computeProduct.value[2];
    third_product.value = product;
    return product;
  }
  return third_product.value;
});

const computeTotalAmount = computed(() => {
  if (isUpdateAction.value) {
    const total_amount =
      computeProduct.value[0] +
      computeProduct.value[1] +
      computeProduct.value[2];
    originalTotalAmount.value = total_amount;
    return total_amount;
  }
  return originalTotalAmount.value;
});

function updateTitle() {
  const newTitleElement = document.getElementById('lotInput').value;
  title.value = newTitleElement;
}

function redirectTosurveydetails() {
  router.push('/surveydetails');
}

function redirectTosurveyprogress() {
  router.push('/surveyprogress');
}

function redirectTopaymentprogress() {
  router.push('/paymentprogress');
}

function makeEditable() {
  const multiplier = document.getElementsByClassName("number-multiplier");
  for (let i = 0; i < multiplier.length; i++) {
    const input = multiplier[i];
    const originalValue = input.value;
    originalMultipliers.value[input.id] = originalValue;
    input.disabled = false;
    input.classList.add("editable");
  }

  const multiplicand = document.getElementsByClassName("number-multiplicand");
  for (let i = 1; i < multiplicand.length; i++) {
    const input = multiplicand[i];
    const originalValue = input.value;
    originalMultiplicands.value[input.id] = originalValue;
    input.disabled = false;
    input.classList.add("editable");
  }

  const inputs = document.getElementsByClassName("input-text");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const originalValue = input.value;
    originalInputs.value[input.id] = originalValue;
    input.disabled = false;
    input.classList.add("editable");
  }

  isUpdateAction.value = false;
  document.getElementsByClassName("edit-button")[0].style.display = "none";
  document.getElementsByClassName("cancelBtn")[0].style.display = "inline-block";
  document.getElementsByClassName("updateBtn")[0].style.display = "inline-block";
}

function cancelEdit() {
  const inputs = document.getElementsByClassName("input-text");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const originalValue = originalInputs.value[input.id];
    input.value = originalValue;
    input.disabled = true;
    input.classList.remove("editable");
  }

  const multiplier = document.getElementsByClassName("number-multiplier");
  for (let i = 0; i < multiplier.length; i++) {
    const input = multiplier[i];
    const originalValue = originalMultipliers.value[input.id];
    input.value = originalValue;
    input.disabled = true;
    input.classList.remove("editable");
  }

  const multiplicand = document.getElementsByClassName("number-multiplicand");
  for (let i = 1; i < multiplicand.length; i++) {
    const input = multiplicand[i];
    const originalValue = originalMultiplicands.value[input.id];
    input.value = originalValue;
    input.disabled = true;
    input.classList.remove("editable");
  }

  isUpdateAction.value = false;
  document.getElementsByClassName("edit-button")[0].style.display = "inline-block";
  document.getElementsByClassName("cancelBtn")[0].style.display = "none";
  document.getElementsByClassName("updateBtn")[0].style.display = "none";
}

function updateValue() {
  const multiplier = document.getElementsByClassName("number-multiplier");
  for (let i = 0; i < multiplier.length; i++) {
    const newValue = multiplier[i].value;
    newInput.value = newValue;
    originalMultipliers.value[multiplier[i].id] = newValue;
    multiplier[i].disabled = true;
    multiplier[i].classList.remove("editable");
  }

  const multiplicand = document.getElementsByClassName("number-multiplicand");
  for (let i = 1; i < multiplicand.length; i++) {
    const newValue = multiplicand[i].value;
    newInput.value = newValue;
    originalMultiplicands.value[multiplicand[i].id] = newValue;
    multiplicand[i].disabled = true;
    multiplicand[i].classList.remove("editable");
  }

  const inputs = document.getElementsByClassName("input-text");
  for (let i = 0; i < inputs.length; i++) {
    const newValue = inputs[i].value;
    newInput.value = newValue;
    originalInputs.value[inputs[i].id] = newValue;
    inputs[i].disabled = true;
    inputs[i].classList.remove("editable");
  }

  isUpdateAction.value = true;
  document.getElementsByClassName("edit-button")[0].style.display = "inline-block";
  document.getElementsByClassName("cancelBtn")[0].style.display = "none";
  document.getElementsByClassName("updateBtn")[0].style.display = "none";

  submitform();
}

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
                                <input class="input-text" type="date" id="date-input" :disabled="disabled" v-model="transactionDate">
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Schedule of Survey</span>
                                </div>
                                <input class="input-text" type="date" id="date-input" :disabled="disabled" v-model="scheduleOfSurvey"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Claimant</span>
                                </div>
                                <input class="input-text" id="claimantInput" type="text" :disabled="disabled" v-model="claimant"/>        
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Type of Survey</span>
                                </div>
                                <input class="input-text" id="surveyInput" type="text" :disabled="disabled" v-model="typeOfSurvey"/>
                            </div>
                        </div>
                        <div class="survey-right">
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Province</span>
                                </div>
                                <input class="input-text" id="provinceInput" type="text" :disabled="disabled" v-model="province"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Municipality</span>
                                </div>
                                <input class="input-text" id="municipalityInput" type="text" :disabled="disabled" v-model="municipality"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Barangay</span>
                                </div>
                                <input class="input-text" id="barangayInput" type="text" :disabled="disabled" v-model="barangay"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Area</span>
                                </div>
                                <input class="input-text" id="areaInput" type="text" :disabled="disabled" v-model="area"/>
                            </div>
                        </div>
                    </div>
                    <div class="survey-bottom">
                        <div class="survey-information-subpanel">
                            <div class="subtitle-survey">
                                <span>Lot & Survey No.</span>
                            </div>
                            <input class="input-text" id="lotInput" type="text" :disabled="disabled" v-model="lotAndSurveyNo"/>
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
                                <input class="input-text" id="nameInput" type="text" :disabled="disabled" v-model="clientName"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Relation to Claimant</span>
                                </div>
                                <input class="input-text" id="relationInput" type="text" :disabled="disabled" v-model="relationToClaimant"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Address</span>
                                </div>
                                <input class="input-text" id="addressInput" type="text" :disabled="disabled" v-model="address"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Mobile No.</span>
                                </div>
                                <input class="input-text" id="mobileInput" type="text" :disabled="disabled" v-model="mobileNo"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Email Address</span>
                                </div>
                                <input class="input-text" id="emailInput" type="email" :disabled="disabled" v-model="emailAddress"/>
                            </div>
                            <div class="survey-information-subpanel">
                                <div class="subtitle-survey">
                                    <span>Messenger</span>
                                </div>
                                <input class="input-text" id="messengerInput" type="text" :disabled="disabled" v-model="messenger"/>
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
                                <input class="input-text" type="file" id="myFile" name="filename"  :disabled="disabled" @change="SurveyAttachmentsQuatationFile"/>   
                                <span class="uploadStatus">File Uploaded:{{SurveyAttachmentsQuatationFileName}}</span>           
                            </div>
                            <div class="outer-panel">
                                <span class="details-of-pricing-title">Details of Pricing</span>
                            </div>
                            
                            <div class="details-of-pricing-subpanel">
                                <div class="first-panel">
                                    <div class="first-panel-title">
                                        <span>First Hectare</span>
                                    </div>
                                    <input class="number-multiplicand" id="firstHectareInput" type="number" v-model="pairs[0].multiplicand" :disabled="disabled"/>
                                </div>
                                <div >
                                    <span class="second-panel">@</span>
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
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled" @change="Survey_Attachments_Doc"/>
                                <span class="uploadStatus">File Uploaded:{{SurveyAttachmentsDocFileName}}</span>
                            </div>
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">Photos</span>
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled" @change="SurveyAttachmentsPhoto"/>
                                <span class="uploadStatus">File Uploaded:{{SurveyAttachmentsPhotoFileName}}</span>
                            </div>
                        </div>
                        <div class="survey-right">
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">CAD Plan</span>
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled" @change="handleAutoCADUpload"/>
                                <span class="uploadStatus">File Uploaded:{{SurveyAttachmentsCadFileName}}</span>
                            </div>
                            <div class="survey-information-subpanel">
                                <span class="subtitle-survey">eSurvey</span>
                                <input class="input-text" type="file" id="myFile" name="filename" :disabled="disabled" @change="SurveyAttachmentseSurveyFile"/>
                                <span class="uploadStatus">File Uploaded:{{SurveyAttachmentseSurveyFileName}}</span>
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
    align-items: flex-start;
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

.outer-panel{
    width: 100%;
    padding: 2px 0;
}

.survey-information-subpanel{
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    padding: 2px 0;
    align-items: center;
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
    padding: 0 10px;
    width: auto;
    border-radius: 3px 0 0 3px;
    height: 30px;
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.details-of-pricing-title{
    border: 1px var(--border) solid;
    border-radius: 3px;
    background-color: var(--grey);
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    display: flex;
    width: 100%;
    height: 100%;
    /*
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    */
}

.number-multiplicand{
    display: flex;
    border: 1px var(--border) solid;
    height: 100%;
    border-left: none;
    border-radius: 0 3px 3px 0;
    width: 30px;
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
    align-items: center;
    text-align: center;
    border: 1px var(--border) solid;
    height: 100%;
    border-radius: 3px;
    font-size: 15px;
    width: 100%;
}

.fifth-panel{   
    display: flex;
    justify-content: center; 
    align-items: center;
    /* padding: 0 20px; */
}

.first-panel-title{
    border: 1px var(--border) solid;
    background-color: var(--grey);
    padding: 2px 10px;
    width: 108px;
    height: 30px;
    border-radius: 3px 0 0 3px;
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
.uploadStatus{
    color: red;
}

</style>