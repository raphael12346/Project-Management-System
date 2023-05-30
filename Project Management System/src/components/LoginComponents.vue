<template>
    <section class = "container">
        <div class="side">
            <img class = "logo" src = "../assets/logo.jpg" />
        </div>
        
        <div class = "login">
            
            <h1 class="head">LOGIN</h1>
            <div class="inputs">
                <input type = "text" placeholder= "Username" class="text"/>
                <input type = "password" placeholder= "Password" class="password"/>
            </div>
            <div>
                <button class="submit">Login</button>
            </div>         
        </div>
    </section>
</template>
    
<style>
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust the height as needed */
    background-color: #007BFF;
}
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    height: 350PX;
    padding: 50px;
    padding-left: 0%;
    padding-right: 0%;
    border-radius: 7px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.side{
    height: 350px;
    display: flex;
    align-items: center;
    padding: 50px;
    padding-left: 25px;
    padding-right: 0px;  
}

.login{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 450px;
    padding: 25px;
    border-radius: 5px;
    padding-left: 0px;
}

.logo{
    width: 400px;
}

.head{
    color:#333333;
    font-weight: 800;
    font-size: 45px;
    margin-bottom: 5px;
}

.inputs{
    display: flex;
    flex-direction: column;
    width: 80%;
}

input.text, input.password{
    font-size: 18px;
    height: 50px;
    margin-bottom: 10px;
    padding: 10px;
    padding-left: 15px;
    border-radius: 5px;
    width: 100%;
}

.submit{
    color: white;
    width: 120px;
    height: 50px;
    background-color: #007BFF;
    font-size: 18px;
    border: none;
    border-radius: 5px;
}
.submit:hover{
    background-color: #343A40;
}

</style>

<script>
export default {
    name: 'Login'
}
</script>