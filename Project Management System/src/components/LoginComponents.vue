<template>
    <section class="container">
      <div class="side">
        <img class="logo" src="../assets/logo.png" />
      </div>
      <hr color="grey" size="2" width="80%" align="center">
      <div class="login">
        <h5 class="head">LOGIN</h5>
        <div class="inputs">
          <input type="text" placeholder="Username" class="text" v-model="username" />
          <input type="password" placeholder="Password" class="password" v-model="password" />
        </div>
        <div>
          <button class="submit" @click="login">Login</button>
        </div>
      </div>
    </section>
  </template>
    
<style>
body{
    display: flex;
    align-items: center;
    height: 100vh;
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 80px;
    justify-content: center;
}
.container{
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.751);
    border-radius: 7px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.side{
    height: 120px;
    display: flex;
    align-items: center;
}

.login{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 400px;
    border-radius: 5px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 40px;
    margin-top: 20px;
}

.logo{
    width: 300px;
}

.head{
    color:#024995;
    font-weight: bolder;
    font-size: 30px;
    margin-bottom: 5px;
}

.inputs{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
}

input.text, input.password{
    font-size: 16px;
    height: 40px;
    margin-bottom: 12px;
    padding: 10px;
    padding-left: 15px;
    border-radius: 5px;
    width: 80%;
    border: 1.5px solid #343A40;
    background-color: rgba(255, 255, 255, 0.089);
}

input.text:focus,input.password:focus{
    border: 3px solid #343A40;
}

.submit{
    color: white;
    width: 100px;
    height: 40px;
    background-color: #007BFF;
    font-size: 16px;
    border: none;
    border-radius: 5px;
}
.submit:hover{
    background-color: #343A40;
    cursor: pointer;
}

</style>

<script>
export default {
    name: 'Login'
}
</script>