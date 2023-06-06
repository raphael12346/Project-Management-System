<template>
    <div class="header">
        <div class="title">
            <span>All Surveys</span>
        </div>

        <div class="right-panel">
            <div class="createBtn">
                <button class="create-button"> 
                Create a New Survey
                </button>
            </div>
            <div class="search-container">
                <input type="text" placeholder="Search..." name="search">
                <button type="submit">
                    <span id="search-icon" class="material-symbols-rounded">
                        search
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="container">
        <table>
            <tr class="table-titles">
                <th>Lot & Survey No.</th>
                <th>Client</th>
                <th>Property Location</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <tr>
                <th>LOT 5677 - A - 2 , PSD - 08 - D</th>
                <th>Raphael S. Orillano</th>
                <th>Brgy. Airport, Ormoc City</th>
                <th>₱20,000.00</th>
                <th>Ongoing</th>
                <th></th>
            </tr>
            <tr>
                <th>LOT 6001 - A - 2 , PSD - 08 - D</th>
                <th>Kyle Nierras</th>
                <th>Brgy. Salvacion, Ormoc City</th>
                <th>₱36,000.00</th>
                <th>Completed</th>
                <th></th>
            </tr>
        </table>
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
        border-radius: 3px;
        margin-right: 10px;
        font-size: 14px;
        padding: 0 10px;
    }

    .createBtn button:hover{
        background-color: #2ea54ce3;
        cursor: pointer;
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

    table {
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    th, td {
        text-align: left;
        padding: 16px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }

</style>
<script>
export default {
    name: 'DashBoard'
}
</script>