<template>
<div class="header">
    <p>Dashboard</p>
</div>
<div class="columns">
    <div class="left-column">
        <div class="cards">
            <div class="cardOne">
                <h4>Ongoing Survey</h4>
                <h2>0</h2>
            </div>
            <div class="cardTwo">
                <h4>Completed Survey</h4>
                <h2>0</h2>
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
          <h1>Calender</h1>
          <div class="calendar">

          </div>
          <div class="agenda">
            
          </div>
          <div class="agenda">
            
        </div>
        <div class="agenda">
            
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
    width: 100%;
}

.left-column{
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: auto;    
}

.right-column{
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 300px;
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
    border-radius: 5px;   
    width: 270px;
}


.cardTwo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #343A40;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    width: 270px;
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

h3{
    color: #343A40;
}

h1{
    color: #343A40;
    font-weight: bold;
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

.calendar{
    margin: 3px;
    height: 200px;
    width: 100%;
    background-color: #ffd900;
    border-radius: 5px;
}

.agenda{
    margin: 3px;
    height: 100px;
    width: 100%;
    background-color: red;
    border-radius: 5px;

}

</style>
<script>
export default {
    name: 'DashBoard'
}
</script>