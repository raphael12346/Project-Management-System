<template>
    <div class="header">
        <div class="title">
            <span>LOT 5677 - A - 2 , PSD - 08 - D</span>
        </div>
    </div>
    <div class="container">
        <div class="tabs">
            <div class="survey-details-tab">
                <div class="icon-text">
                    <span>Survey Details</span>
                </div>
            </div>
            <div class="survey-progress-tab">
                <div class="icon-text">
                    <span>Survey Progress</span>
                </div>
            </div>
            <div class="payment-progress-tab">
                <div class="icon-text">
                    <span>Payment Progresss</span>
                </div>
            </div>
        </div>
        <div class="surveydetails-panel">
            <div class="survey-info-title">
                <span>Survey Information</span>
                    <span id="edit-square-icon" class="material-symbols-rounded">
                        edit_square
                    </span>
            </div>
            <div class="survey-info-details">
                <div class="survey-left">
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Transaction Date</span>
                        </div>
                        <div class="survey-text">
                            <input type="date" id="date-input">  
                        </div>
                    </div>
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Schedule of Survey</span>
                        </div>
                        <div class="survey-text">
                            <input type="date" id="date-input" >
                        </div>
                    </div>
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Claimant</span>
                        </div>
                        <div class="survey-text">
                            <span>Emmanuel G. Orillano</span>
                        </div>
                    </div>
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Type of Survey</span>
                        </div>
                        <div class="survey-text">
                            <span>Consolidation - Subdivision</span>
                        </div>
                    </div>
                    
                </div>
                <div class="survey-right">
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Province</span>
                        </div>
                        <div class="survey-text">
                            <span>Leyte</span>
                        </div>
                    </div>
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Municipality</span>
                        </div>
                        <div class="survey-text">
                            <span>Ormoc City</span>
                        </div>
                    </div>
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Barangay</span>
                        </div>
                        <div class="survey-text">
                            <span>Airport</span>
                        </div>
                    </div>
                    <div class="survey-information-subpanel">
                        <div class="subtitle-survey">
                            <span>Area</span>
                        </div>
                        <div class="survey-text">
                            <span>7,563 sq. m.</span>
                        </div>
                    </div>
                </div>
                <div class="lot-survey-detail">

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

    .icon-text span{
        text-align: center ;
        color: #F4F4F4;
    }

    #date-input{
        border: none;
        height: 28px;
        width: 100%;
    }

    .survey-details-tab, .survey-progress-tab, .payment-progress-tab{
        width: auto;
        height: 30px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-items: center;
        padding: 0 30px;
        background-color: #343A40;
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

    .surveydetails-panel
    {
        background-color: white;
        height: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .survey-info-title{
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

    .survey-information-subpanel{
        display: grid;
        grid-template-columns: auto 1fr auto;
        width: 100%;
        padding: 2px 0;
        align-items: center;

    }

    .survey-text{
        border: 1px var(--border) solid;
        text-align: center;
        padding: 0 5px;
    }

    .subtitle-survey{
        background-color: var(--grey);
        padding: 2px 10px;
        width: auto;
    }

    .survey-info-details{
        padding: 5px 0px;
        display: flex;
        flex-direction: row;
    }

    .survey-button button{
        border: 1px var(--border) solid;
        border-radius: 0 3px 3px 0;
    }

    #calendar-icon{
        color:#343A40;
        font-size: 20px;
    }
    
</style>
<script>
export default {
    name: 'SurveyDetails'
}
</script>