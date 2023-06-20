<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { db } from "../firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from 'firebase/firestore';

// Declare form data variables
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

const projects = ref([]);

const generateRandomString =(length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

const getDocumentId = async (index) => {
  try {
    const documentID = ref("");
    const q = query(collection(db, 'Projects'), where('docId', '==', index));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    documentID.value = doc.id;
    console.log(documentID.value);
    
    db.collection("Current_Id")
    .doc("currentid")
    .update({
      documentId: documentID.value,
    })
    .then(() => {
      //console.log("Document successfully written!");
    })
    .catch((error) => {
      //console.error("Error writing document: ", error);
    });

    });
  } catch (error) {
    //console.log('Error getting document ID: ', error);
  }
};

const open = (index) => {
  db.collection("Current_Id")
    .doc("currentid")
    .update({
      currentId: index,
    })
    .then(() => {
      //console.log("Document successfully written!");
    })
    .catch((error) => {
      //console.error("Error writing document: ", error);
    });

    getDocumentId(index);



    router.push(`/surveydetails`);
}
const submitform = () => {
  const form = document.querySelector('form'); // Replace with the appropriate selector for your form
  if (form.checkValidity()) {
    const randomNum = ref(generateRandomString(10));

  db.collection("Projects")
    .add({
      docId: randomNum.value,
      transactionDate: transactionDate.value,
      scheduleOfSurvey: scheduleOfSurvey.value,
      claimant: claimant.value,
      typeOfSurvey: typeOfSurvey.value,
      province: province.value,
      municipality: municipality.value,
      barangay: barangay.value,
      area: area.value,
      lotAndSurveyNo: lotAndSurveyNo.value,
      clientName: clientName.value,
      relationToClaimant: relationToClaimant.value,
      address: address.value,
      mobileNo: mobileNo.value,
      emailAddress: emailAddress.value,
      messenger: messenger.value,
    })
    .then(() => {
      console.log("Document successfully written!");
      location.reload();
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
    createNewSurvey.value = false;
    // Submit to Firebase
    // ...rest of your code
  } else {
    // Handle form validation errors
    console.log("WOWOWOWOWOOWO");
  }
};


// Adding the data
// const submitform = () => {
//   // Submit to Firebase
  
// };

const deleteProject = (userId,index) => {
  db.collection('Projects')
      .where('docId', '==', userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete()
            .then(() => {
              console.log('Document successfully deleted!');
              projects.value.splice(index, 1);
              location.reload();
            })
            .catch((error) => {
              console.error('Error deleting document:', error);
            });
        });
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });
    isDelete.value = false;
};

const fetchProjects = () => {
const auth = getAuth();
onAuthStateChanged(auth, async (user)  => {
  const userId = ref('')
  if (user) {
    userId.value = user.uid.toString(); // Convert to string

    console.log(userId.value);

    const querySnapshot = await getDocs(collection(db, 'Users', userId.value, 'Projects'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        console.log(userId.value);
    });

    // ...
  } else {
    // User is signed out
    // ...
  }
});

}

const startup = async () => {
  db.collection("Project").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
}

const getalldoc = () => {
  db.collection("Projects").get().then((querySnapshot) => {
    const projectData = [];
    querySnapshot.forEach((doc) => {
      projectData.push(doc.data());
    });
    projects.value = projectData;
  });
};

const getdocss = () => {
  db.collection("Projects").where("userId", "==", "IC3ZBaTxsaaNN9yCWSSZYYrMAO63")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(querySnapshot);
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

// Call the fetchProjects method when the component is mounted

onMounted(getalldoc);

const createNewSurvey = ref(false);
const router = useRouter();

const closeWindow = () => {
  createNewSurvey.value = false;
}

const isDelete = ref(false);

const cancelDelete = () => {
  isDelete.value = false;
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
    <tr v-for="(project, index) in projects" :key="index">
      <th>{{ project.lotAndSurveyNo }}</th>
      <th>{{ project.clientName }}</th>
      <th>Brgy. {{ project.barangay }}, {{ project.municipality }},  {{ project.province }}</th>
      <th>₱{{ project.totalAmount }}.00</th>
      <th>In Progress</th>
      <th>
        <div class="actions">
          <button class="openBtn" @click="open(project.docId)">Open</button>
          <button class="deleteBtn" @click="isDelete = true">
            <span id="delete-icon" class="material-symbols-rounded">delete</span>
          </button>
          <div class="confirmation-panel" v-show="isDelete">
            <div class="confirmation-box">
              <h>Delete Survey</h>
              <span>Are you sure you want to delete this survey?</span>
              <div class="button-confirmation">
                <button class="confirm-cancel" @click="cancelDelete">Cancel</button>
                <!-- <button class="confirm-delete" @click="deleteProject(project.docId,index)">Delete</button> -->
                <button class="confirm-delete" @click="deleteProject(project.docId, index)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </th>
    </tr>
  </table>

    </div>
    <div class="add-container" v-show="createNewSurvey" >
      <div class="form">
        <form @submit.prevent="submitform">
          <div class="surveyinformationpanel">
            <div class="surveyinformationtitle">
              <span>Survey Information</span>
            </div>
            <div class="surveyinformationsubpanel-top">
              <div class="surveyinformationsubpanel-left">
                <div class="surveyinformationsubpanels">
                  <span>Transaction Date</span>
                  <input type="date" v-model="transactionDate" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Schedule of Survey</span>
                  <input type="date" v-model="scheduleOfSurvey" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Claimant</span>
                  <input type="text" v-model="claimant" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Type of Survey</span>
                  <input type="text" v-model="typeOfSurvey" required/>
                </div>
              </div>
              <div class="surveyinformationsubpanel-right">
                <div class="surveyinformationsubpanels">
                  <span>Province</span>
                  <input type="text" v-model="province" required/>
                </div>
                <div class="surveyinformationsubpanels" >
                  <span>Municipality</span>
                  <input type="text" v-model="municipality" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Barangay</span>
                  <input type="text" v-model="barangay" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Area</span>
                  <input type="text" v-model="area" required/>
                </div>
              </div>
            </div>
            <div class="surveyinformationsubpanel-bottom">
              <div class="surveyinformationsubpanels">
                <span>Lot & Survey No.</span>
                <input type="text" v-model="lotAndSurveyNo" required/>
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
                  <input type="text" v-model="clientName" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Relation to Claimant</span>
                  <input type="text" v-model="relationToClaimant" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Address</span>
                  <input type="text" v-model="address" required/>
                </div>
              </div>
              <div class="surveyinformationsubpanel-right">
                <div class="surveyinformationsubpanels">
                  <span>Mobile No.</span>
                  <input type="text" v-model="mobileNo" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Email Adress</span>
                  <input type="text" v-model="emailAddress" required/>
                </div>
                <div class="surveyinformationsubpanels">
                  <span>Messenger</span>
                  <input type="text" v-model="messenger" required/>
                </div>
              </div>
            </div>
          </div>
          <div class="form-buttons">
            <button class="form-cancelBtn" @click="closeWindow">Cancel</button>
            <button type="submit" class="form-addSurveyBtn">Add Survey</button>
          </div>
        </form>
      </div>
    </div>
    
</template>

<style scoped>
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
    color: white;
}

.add-container{
    position: fixed;
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
    border-radius: 5px;
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

.confirmation-panel{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.146);
    height: 100vh;
    width: 100vw; 
    top: 0;
    right: 0; 
    display: flex;
    align-items: center;
    justify-content: center;  
    transition: opacity 2s;
}

.confirmation-box{
  background-color: white;
  color: black;
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

h{
  font-size: 30px;
  font-weight: bold;
}

.confirmation-box span{
  font-size: 20px;
}

.confirm-delete{
  border: 1px #EE4035 solid;
  background-color: #EE4035;
  color: white;
  font-size: 18px;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
}

.confirm-cancel{
  border: 1px #343A40 solid;
  font-size: 18px;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
}

</style>
