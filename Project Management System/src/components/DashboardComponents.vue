<template>
<div class="header">
    <p>Dashboard</p>
</div>
<div class="columns">
    <div class="left-column">
        <div class="cards">
            <div class="cardOne">
                <h4>Ongoing Survey</h4>
                <h2>5</h2>
            </div>
            <div class="cardTwo">
                <h4>Ongoing Survey</h4>
                <h2>5</h2>
            </div>

        </div>
        <div class="feature">
            <div class="title_click">
                <h3>Ongoing Surveys</h3>
                <h3>View all</h3>
            </div>
            <div class="top3">
                <div class="box">

                </div>
                <div class="box">

                </div>
                <div class="box">

                </div>

            </div>

        </div>
        <div class="feature">
            <div class="title_click">
                <h3>Ongoing Surveys</h3>
                <h3>View all</h3>
            </div>
            <div class="top3">
                <div class="box">

                </div>
                <div class="box">

                </div>
                <div class="box">

                </div>

            </div>

        </div>

    </div>

    <div class="right-column">
          <h2>Calender</h2>
    </div>

</div>

</template>


<style>
.header{
    display: flex;
    align-items: center;
    padding-left: 40px;
    color: #007BFF;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    height: 80px;
}

.header p{
    font-weight: bold;
    font-size: 30px;
}

.columns{
    display: flex;
}

.left-column{
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
}

.right-column{
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
}

.cards{
    display: flex;
    align-items: center;
    justify-content: center;
}

.cardOne{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #007BFF;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;    
}


.cardTwo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ffd900;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
}

h4 , h2{
color: white;
}

h2{
    font-size: 50px;
}
h4{
    font-size: 30px;
}

.title_click{
    display: flex;
    justify-content: space-between;
}

.top3{
    padding: 10px;
    display: flex
}

.box{
    margin: 10px;
    width: 300px;
    height: 200px;
    background-color: blue;
}



</style>