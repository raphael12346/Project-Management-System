<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const attributes = ref([
  {
    highlight: true,
    dates: new Date(),
  },
]);

const router = useRouter();

const redirectToallsurveys = () => {
  router.push('/allsurveys');
};

const redirectToongoingsurveys = () => {
  router.push('/ongoingsurveys');
};

</script>

<template>
    <div class="header">
        <p>Dashboard</p>
    </div>
    <div class="columns">
        <div class="left-column">
            <div class="counter-panel">
                <div class="left-box">
                    <div class="upper-counter">
                        <span class="material-symbols-rounded" id="pending-icon">other_admission</span>
                        <span class="counter-value">3</span>
                    </div>
                    <span class="counter-title">Ongoing Surveys</span>
                </div>
                <div class="right-box">
                    <div class="upper-counter">
                        <span class="material-symbols-rounded" id="check-icon">check_circle</span>
                        <span class="counter-value">1</span>
                    </div>
                    <span class="counter-title">Completed Surveys</span>
                </div>
            </div>
            <div class="view-all-panel">
                <span class="ongoing-surveys-text">All Surveys</span>
                <span class="view-all-text" @click="redirectToallsurveys">View all</span>
            </div>
            <div class="ongoing-surveys-boxes-panel">
                <div class="box">
                    <div class="view-box">
                        <span>VIEW SURVEY</span>
                    </div>
                    <div class="upper-box">
                        <span class="box-lot-title">LOT 5690</span>
                        <span>Client: Kyle Nierras</span>
                    </div>
                    <div class="lower-box">
                        <div class="bar3">
                            <span>Progress: 100%</span>
                        </div>
                    </div>
                </div>
                
                <div class="box">
                    <div class="view-box">
                        <span>VIEW SURVEY</span>
                    </div>
                    <div class="upper-box">
                        <span class="box-lot-title">LOT 8448</span>
                        <span>Client: Jess Mosquera</span>
                    </div>
                    <div class="lower-box">
                        <div class="bar2">
                            <span>Progress: 40%</span>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="view-box">
                        <span>VIEW SURVEY</span>
                    </div>
                    <div class="upper-box">
                        <span class="box-lot-title">LOT 1500</span>
                        <span>Client: Emmanuel G. Orillano</span>
                    </div>
                    <div class="lower-box">
                        <div class="bar1">
                            <span>Progress: 85%</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="view-all-panel">
                <span class="ongoing-surveys-text">Ongoing Surveys</span>
                <span class="view-all-text" @click="redirectToongoingsurveys">View all</span>
            </div>
            <div class="ongoing-surveys-boxes-panel">
                
                <div class="box">
                    <div class="view-box">
                        <span>VIEW SURVEY</span>
                    </div>
                    <div class="upper-box">
                        <span class="box-lot-title">LOT 8448</span>
                        <span>Client: Jess Mosquera</span>
                    </div>
                    <div class="lower-box">
                        <div class="bar2">
                            <span>Progress: 40%</span>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="view-box">
                        <span>VIEW SURVEY</span>
                    </div>
                    <div class="upper-box">
                        <span class="box-lot-title">LOT 1500</span>
                        <span>Client: Emmanuel G. Orillano</span>
                    </div>
                    <div class="lower-box">
                        <div class="bar1">
                            <span>Progress: 85%</span>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <span></span>
                </div>
            </div>
        </div>
        <div class="right-column">
            <span class="calender-title">Calendar</span>
            <div class="calendar"><VCalendar expanded trim-weeks :attributes="attributes"/></div>
            <div class="due-dates">
                <div class="top-duedate">
                    <span>30 June 2023</span>
                </div>
                <div class="bottom-duedate">
                    Survey Schedule - LOT 1500
                </div>
                <div class="bottom-duedate">
                    Client: Emmanuel G. Orillano
                </div>
            </div>
            <div class="due-dates">
                <div class="top-duedate">
                    <span>2 July 2023</span>
                </div>
                <div class="middle-duedate">
                    Survey Schedule - LOT 1653
                </div>
                <div class="bottom-duedate">
                    Client: Jess Mosquera
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    align-items: center;
    padding-left: 40px;
    color: #007BFF;
    background-color: white;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    height: 80px;
}

.header p{
    font-weight: bold;
    font-size: 30px;
}

.columns{
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
}

.left-column{
    width: auto;
    display: flex;
    margin-right: 10px;
    flex-direction: column;
}

.right-column{
    width: 250px;
    margin-left: 10px;
}

.counter-panel{
    display: flex;
    align-items: top;
    justify-content:space-evenly;
    width: 100%;
    height: auto;
}

.counter-title{
    font-size: 16px;
    background-color: #343A40;
    width: 100%;
    padding: 10px 0;
    border-radius: 0 0 5px 5px;
}
.counter-value{
    font-size: 60px;
    font-weight: bold;
    line-height: 50px;
}

.left-box, .right-box{
    width: 250px;
    height: 180px;
    margin: 20px;
    margin-top: 0;
    background: linear-gradient(230deg, rgba(0,123,255,1) 0%, rgba(0,72,149,1) 100%);
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
}

#pending-icon, #check-icon{
    font-size: 70px;
    font-weight: bold;
    margin: 0;
    color: #343A40;
}

.calender-title{
    font-size: 20px;
    color: #343A40;
    font-weight: bold;
}

.view-all-panel{
    color: #343A40;
    display: flex;
    justify-content:space-between;
}

.view-all-text{
    color: #007BFF;
    cursor: pointer;
}

.ongoing-surveys-boxes-panel{
    display: flex;
    justify-content:space-evenly;
    margin: 10px 0;
}

.box{
    height: 150px;
    width: 100%;
    margin: 0 10px;
    background-color: #343a40a1;
    max-width: 280px;
}

.upper-counter{
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    padding: 0 60px;
}

.due-dates{
    width: 100%;
    height: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    border: 1px var(--border) solid;
}

.top-duedate span{
    font-size: 20px;
    font-weight: bold;
    color: #007BFF;
}

.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

.upper-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 76%;
    background-color: #007BFF;
    color: white;
    border-radius: 5px 5px 0 0;
}

.lower-box{
    display: flex;
    width: 100%;
    height: 24%;
}

.bar1, .bar2, .bar3{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #343A40;
    color: white;
    border-radius: 0 0 0 5px;
}
.bar1{
    width: 85%;
}

.bar2{
    width: 40%;
}

.bar3{
    width: 100%;
    border-radius: 0 0 3px 3px;
}

.box-lot-title{
    font-size: 25px;
    font-weight: bold;
}

.view-box{
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    height: 150px;
    width: 280px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0);
    font-size: 20px;
    font-weight: bold;
}

.view-box:hover{
    background-color: #343a40f0;
    /* background-color:#007bffb9; */
    color: rgb(255, 255, 255);
    transition: .3s;
}

</style>
