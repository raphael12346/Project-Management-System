<template>
    <div class="sidebar">
        <div class="top-menu">
            <img class = "logo" src = "../assets/logo.jpg" />
            <span class="material-symbols-rounded">
                menu
            </span>
        </div>
        <div class="profile">
            <span class="material-symbols-rounded">
                account_circle
            </span>
            <div class="text">
                <p class="name">
                    Liza S. Orillano
                </p>
                <p class="occupation">
                    Civil Engineer
                </p>
            </div>
            <span class="material-symbols-rounded">
                more_horiz
            </span>
        </div>
        <div class="panels">
            <img class = "side-icon" src = "../assets/dashboard.svg" />
            <div class="text-name">
                <p>
                    Dashboard
                </p>
            </div>
        </div>
        <div class="panels">
            <img class = "side-icon" src = "../assets/format-list.svg" />
            <div class="text-name">
                <p>
                    All Surveys
                </p>
            </div>
        </div>
        <div class="panels">
            <img class = "side-icon" src = "../assets/pending-action.svg" />
            <div class="text-name">
                <p>
                    Ongoing Surveys
                </p>
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
    width: 300px;
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

.material-symbols-rounded{
    width: 48px;
    height: 48px;
    color: white;
}

.profile{
    display: flex;
    height: 100px;
    width: 100%;
}

.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: white;
}
p.name{
    font-size: 20px;
    font-weight: bold;
}
p.occupation{
    font-size: 12spx;
}

.panels{
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: rows;
    justify-content: center;
}

.side-icon{
    width: 35px;
    height: 35px;
    margin: auto;
}

.text-name{
    font-size: 20px;
    width: 220px;
    color: white;
    margin: 10px;
    padding: 10px;
    margin-left: 0px;
}

</style>

<script>
export default {
    name: 'DashBoard'
}
</script>