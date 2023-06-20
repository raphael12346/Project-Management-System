<script>
export default {
  computed: {
    activeComponent() {
      return this.$route.meta.activeComponent;
    }
  },
  methods: {
    redirectToDashboard() {
      this.$router.push('/dashboard')
    },
    redirectToallsurveys() {
      this.$router.push('/allsurveys')
    },
    redirectToongoingsurveys() {
      this.$router.push('/ongoingsurveys')
    }
  }
}
</script>

<template>
    <div class="sidebar">
        <div class="upper">
            <div class="top-menu">
                <img class = "logo" src = "../assets/logo.png" />
            </div>
            <div class="profile-panel">
                <span id ="acount-icon" class="material-symbols-rounded">
                    account_circle
                </span>
                <div class="text">
                    <span class="text-name">
                        Liza S. Orillano
                    </span>
                    <span class="text-occupation">
                        Civil Engineer
                    </span>
                </div>
                <div class="dropdown">
                    <span id="more-icon" class="material-symbols-rounded">
                        more_horiz
                    </span>
                </div>
            </div>
            <div class="panels" :class="{ active: activeComponent === 'dashboard' }" @click="redirectToDashboard">
                <span id="lower-icon" class="material-symbols-rounded">
                    dashboard
                </span>
                <span class = "text-panel" :class="{ active: activeComponent === 'dashboard' }">
                    Dashboard
                </span>
            </div>
            <div class="panels" :class="{ active: activeComponent === 'allsurvey' }" @click="redirectToallsurveys">
                <span id="lower-icon" class="material-symbols-rounded">
                    format_list_bulleted
                </span>
                <span class = "text-panel" :class="{ active: activeComponent === 'allsurvey' }">
                    All Surveys
                </span>
            </div>
            <div class="panels" :class="{ active: activeComponent === 'ongoingsurvey' }" @click="redirectToongoingsurveys">
                <span id="lower-icon" class="material-symbols-rounded">
                    pending_actions
                </span>
                <span class = "text-panel" :class="{ active: activeComponent === 'ongoing' }">
                    Ongoing Surveys
                </span>
            </div>
        </div>
        <div class="lower">
            <div class="panels">
                <span id="lower-icon" class="material-symbols-rounded">
                    settings
                </span>
                <span class = "text-panel">
                    Settings
                </span>
            </div>
            <div class="panels">
                <span id="lower-icon" class="material-symbols-rounded">
                    logout
                </span>
                <span class = "text-panel">
                    Logout
                </span>
            </div>
        </div>
    </div>
</template>
    
<style >
body{
    align-items: center;
    height: 100vh; /* Adjust the height as needed */
    background-color: #F4F4F4;
}

.sidebar{
    position: fixed;
    height: 100%;
    width: 260px;
    background-color: #343A40;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}

.lower{
    margin-bottom: 15px;
}

.top-menu{
    display: flex;
    height: 80px;
    width: 100%;
}
.logo{
    width: 180px;
    margin: auto;
}

.profile-panel{
    display: flex;
    height: 70px;
    width: 100%;
}

.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: white;
}
.text-name{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: -5px;
}
.text-occupation{
    font-size: 12px;
}

.panels{
    width: 260px;
    height: 50px;
    display: flex;
    flex-direction: rows;
    padding: 0 10px;
}

.text-panel{
    font-size: 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
}

#lower-icon{
    font-size: 28px;
    margin: 10px;
}

.material-symbols-rounded{
    font-size: 48px;
    color: white;
    margin: auto;
}

#acount-icon{
    font-size: 50px;
}

.panels:hover{
    background-color:rgba(255, 255, 255, 0.82);
    cursor: pointer;
    border-right: 10px solid #343a404a;
    transition: .5s;
}

.panels:hover span{
    color: #343A40;
    transition: .5s;
}

.dropdown-list{
    position: relative;
    display: inline-block;
}

#more-icon{
    font-size: 28px;
    color: rgba(255, 255, 255, 0);
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.dropdown{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
}

.dropdown-content{
    top: 65%;
    left: 10%;
    display: none;
    position: absolute;
    background-color: #007BFF;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 3px;
}

.dropdown-content a{
    color: white;
    padding: 6px 10px;
    display: block;
    text-align: center;
}

.dropdown-content a:hover{
    background-color: #ddd;
    color: #343A40;
    border-radius: 3px;
    transition: .3s;
}

.dropdown:hover .dropdown-content{
    display: block;
}

.panels.active {
    background-color:rgb(255, 255, 255);
    cursor: pointer;
    color: #343A40; 
    border-right: 10px solid #343a404a;
}

.panels.active span{
    color: #343A40;
}
</style>
