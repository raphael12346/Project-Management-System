<template>
    <section class = "container form">
        <div class = "login">
            <!-- <img class = "logo" src = "../assets/logo.jpg" /> -->
            <header>Login</header>
            <div>
                <input type = "text" placeholder= "Enter Username" class="text"/>
            </div>
            <div>
                <input type = "password" placeholder= "Enter Password" class="password"/>
            </div>
            <div>
                <button>Login</button>
            </div>         
        </div>
    </section>
</template>
    
<style>
/*
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
}

.container{
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: #007BFF;
    align-items: center;
    justify-content: center;
}

.login{
    max-width: 450px;
    width: 100%;
    padding: 25px;
    border-radius: 5px;
    background: white;
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
*/
</style>

<script>
export default {
    name: 'Login'
}
</script>