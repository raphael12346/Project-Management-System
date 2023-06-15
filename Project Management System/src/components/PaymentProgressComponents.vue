<script>
export default {
    props: ['parent'],
    created(){
        console.log(this.parent);
    },
    data() { 
        return {
            
        };
    },
    computed: {
        activeComponent() {
            return this.$route.meta.activeComponent;
        },
        progressPercentage() {
            let ctr = 0;
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
    },
};
</script>
<template>
    <div class="header">
        <div class="title">
            <span>{{ parent }}</span>
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
                <div class="top-panel">
                    <div class="left-panel">
                        <div class="subpanels">
                            <span class="subpanel-title">Payee</span>
                            <input class="subpanel-input" type="text">
                        </div>
                    </div>
                    <div class="right-panel">
                        <div class="subpanels">
                            <span class="subpanel-title">O.R. #</span>
                            <input class="subpanel-input" type="text">
                        </div>
                    </div>                    
                </div>
                <div class="middle-panel">
                    <div class="left-panel">
                        <div class="subpanels">
                            <div class="subpanel-title">
                                <span>Total Amount</span>
                            </div>
                            <span class="subpanel-input"></span>
                        </div>
                    </div>
                    <button class="addBtn">Add Partial Payment</button>   
                </div>
                <div class="bottom-panel">
                    <div class="left-panel">
                        <div class="subpanels">
                            <span class="subpanel-title">Down Payment</span>
                            <input class="subpanel-input" type="text">
                        </div>
                        <div class="subpanels">
                            <span class="subpanel-title">Partial Payment</span>
                            <input class="subpanel-input" type="text">
                        </div>
                        <div class="subpanels">
                            <span class="subpanel-title">Balance</span>
                            <input class="subpanel-input" type="text" disabled>
                        </div>
                    </div>
                    <div class="right-panel">
                        <div class="subpanels">
                            <span class="subpanel-title">Date</span>
                            <input class="subpanel-input" type="date">
                        </div>
                        <div class="subpanels">
                            <span class="subpanel-title">Date</span>
                            <input class="subpanel-input" type="date">
                        </div>
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

.payment-panel{
    margin: 0 100px;
}

.top-panel{
    display: flex;
    align-items: center;
    justify-content: center;
}

.subpanels{
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    width: 100%;
    padding: 3px 0;
}

.subpanel-title{
    border: 1px var(--border) solid;
    background-color: var(--grey);
    padding: 0 10px;
    width: auto;
    border-radius: 3px 0 0 3px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 40px;
}

.subpanel-input{
    border: 1px var(--border) solid;
    border-left: none;
    border-radius: 0 3px 3px 0;
    font-size: 15px;
    padding: 0 10px;
    height: 100%;
    width: auto;
}

.addBtn{
    height: 40px;
    border: none;
    color: white;
    background-color: #2ea54ce3;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    white-space: nowrap;
    margin-left: auto;
}

.bottom-panel{
    display: flex;
    justify-content: center;
    align-items: top;
}

.left-panel, .right-panel{
    width: 50%;
}

.left-panel{
    margin-right: .5%;
}

.right-panel{
    margin-left: .5%;
}

.middle-panel{
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
}
</style>