<template>
    <div class="bg">
        <section class="container">
            <div class="side">
                <img class="logo" src="../assets/logo.png" />
            </div>
            <hr color="grey" size="2" width="80%" align="center">
            <div class="login">
                <h5 class="head">LOGIN</h5>
                <form @submit.prevent="signIn">
                    <div class="inputs">
                        <input type="text" placeholder="Username" class="text" v-model="email" required/>
                        <input type="password" placeholder="Password" class="password" v-model="password" required/>
                    </div>
                    <button class="submit">Login</button>
                </form>
            </div>
        </section>
    </div>
</template>
    
<style scoped>
.bg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("@/assets/background.jpg");
    background-size: cover;
    background-repeat:no-repeat;
}
.container{
    
    border-radius: 7px;
    width: 40%;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.763);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
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
    color: black;
    font-size: 16px;
    height: 40px;
    margin-bottom: 12px;
    padding: 10px;
    padding-left: 15px;
    border-radius: 5px;
    width: 100%;
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
import { firebasedb } from '@/firebase.js';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
        firebasedb
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in successfully
          const user = userCredential.user;
          console.log('Signed in user:', user);
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          // Error occurred during sign-in
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Sign-in error:', errorCode, errorMessage);
        });
    },
  },
};

</script>