<template>
    <section class = "container">
        <div class="side">
            <img class = "logo" src = "../assets/logo.jpg" />
        </div>
        
        <div class = "login">
            
            <h1 class="head">LOGIN</h1>
            <div class="inputs">
                <input type = "text" placeholder= "Enter Username" class="text"/>
                <input type = "password" placeholder= "Enter Password" class="password"/>
            </div>
            <div>
                <button class="submit">Login</button>
            </div>         
        </div>
    </section>
</template>
    
<style>

.submit{
    color: antiquewhite;
    width: 50px;
    height: 20px;
    background-color:blue;
    border: none;
    border-radius: 5px;
}

.side{
    height: 350PX;
    display: flex;
    align-items: center;
    padding: 10px;
    padding-left: 25px;
    
}

.head{
    color: black;
    font-weight: bold;
}

body{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
  background-color: blue;
}

.inputs{
  display: flex;
  flex-direction: column;

}

input.text, input.password{
    height: 30px;
    margin-bottom: 10px;
    padding: 10px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
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
}

.login{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    width: 300px;
    padding: 25px;
    border-radius: 5px;
}
.logo{
    width: 200px;
}

header{
    font-size: 28px;
    font-weight: 600;
    color: #343A40;
    text-align: center;
}

</style>

<script>
export default {
    name: 'Login'
}
</script>