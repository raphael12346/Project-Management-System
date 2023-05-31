<template>
    <div class="sidebar">
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
            <span id="more-icon" class="material-symbols-rounded">
                more_horiz
            </span>
            <div class="dropdown-list">
                <span>Account Settings</span>
            </div>
        </div>
        <div class="panels">
            <span id="lower-icon" class="material-symbols-rounded">
                dashboard
            </span>
            <span class = "text-panel">
                Dashboard
            </span>
        </div>
        <div class="panels">
            <span id="lower-icon" class="material-symbols-rounded">
                format_list_bulleted
            </span>
            <span class = "text-panel">
                All Surveys
            </span>
        </div>
        <div class="panels">
            <span id="lower-icon" class="material-symbols-rounded">
                pending_actions
            </span>
            <span class = "text-panel">
                Ongoing Surveys
            </span>
        </div>
        <div class="lower-panel">
            <div class="lower-panels">
            <span id="lower-icon" class="material-symbols-rounded">
                settings
            </span>
            <span class = "text-panel">
                Settings
            </span>
        </div>
        <div class="lower-panels">
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
    
<style>
body{
    align-items: center;
    height: 100vh; /* Adjust the height as needed */
    background-color: #F4F4F4;
}

.sidebar{
    height: 100vh;
    width: 260px;
    background-color: #343A40;
    display: flex;
    align-items: top;
    flex-direction: column;
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
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: rows;
    justify-content: center;
}

.text-panel{
    font-size: 16px;
    width: 190px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

.material-symbols-rounded{
    font-size: 48px;
    color: white;
    margin: auto;
}

#more-icon{
    font-size: 28px;
    cursor: pointer;
}

#acount-icon{
    font-size: 50px;
}

#lower-icon{
    font-size: 28px;
    margin: auto;
}

.lower-panels{
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: rows;
    justify-content: center;
}

.lower-panel{
    position: absolute; 
    bottom: 0; 
    width: 260px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;
}

.panels:hover{
    background-color:rgba(255, 255, 255, 0.82);
    cursor: pointer;
    border-right: 10px solid #343a404a;
    padding-left: 10px;
    
}

.panels:hover span{
    color: #343A40;
}

.lower-panels:hover{
    background-color:rgba(255, 255, 255, 0.82);
    cursor: pointer;
    border-right: 10px solid #343a404a;
    padding-left: 10px;
    
}

.lower-panels:hover span{
    color: #343A40;
}

.dropdown-list{
    position: absolute;
    background-color: black;
    left: 11%;
    top: 18%;
    padding: 5px;
    cursor: pointer;
}

</style>

<script>
export default {
    name: 'DashBoard'
}
</script>