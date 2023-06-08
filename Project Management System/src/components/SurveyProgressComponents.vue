<script>
export default {
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
    }
  }
}
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
</style>